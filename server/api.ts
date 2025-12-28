import cors from 'cors';
import express from 'express';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const app = express();
app.use(cors());
app.use(express.json());

interface FriendRow {
  telegram_id: number;
  username: string | null;
  latitude: number | null;
  longitude: number | null;
  accuracy: number | null;
  is_live: boolean | null;
  updated_at: string | null;
}

interface TrailRow {
  latitude: number;
  longitude: number;
  timestamp: string;
}

const mapStatus = (updatedAt: string | null): 'online' | 'idle' | 'offline' => {
  if (!updatedAt) return 'offline';
  const delta = Date.now() - new Date(updatedAt).getTime();
  if (delta < 60_000) return 'online';
  if (delta < 5 * 60_000) return 'idle';
  return 'offline';
};

app.get('/api/friends-location', async (req, res) => {
  const userId = req.query.userId;
  if (!userId) return res.status(400).json({ error: 'userId required' });
  try {
    const friendsResult = await pool.query<FriendRow>(
      `SELECT u.telegram_id, u.username, ul.latitude, ul.longitude, ul.accuracy, ul.is_live, ul.updated_at
       FROM users u
       LEFT JOIN user_locations ul ON u.telegram_id = ul.telegram_id
       WHERE u.telegram_id <> $1
       ORDER BY ul.updated_at DESC NULLS LAST`,
      [userId],
    );

    const friends = await Promise.all(
      friendsResult.rows.map(async (row) => {
        const trailResult = await pool.query<TrailRow>(
          `SELECT latitude, longitude, timestamp FROM location_trail WHERE telegram_id = $1 ORDER BY timestamp DESC LIMIT 10`,
          [row.telegram_id],
        );
        return {
          id: row.telegram_id.toString(),
          name: row.username ?? `User ${row.telegram_id}`,
          avatar: `https://api.dicebear.com/7.x/identicon/svg?seed=${row.telegram_id}`,
          status: mapStatus(row.updated_at),
          isLive: Boolean(row.is_live),
          trail: trailResult.rows.map((t) => ({ coords: [t.longitude, t.latitude] as [number, number], ts: new Date(t.timestamp).getTime() })),
        };
      }),
    );

    res.json(friends);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    res.status(500).json({ error: 'internal_error' });
  }
});

app.get('/api/my-location', async (req, res) => {
  const userId = req.query.userId;
  if (!userId) return res.status(400).json({ error: 'userId required' });
  try {
    const result = await pool.query<FriendRow>(
      `SELECT latitude, longitude, accuracy, is_live, updated_at FROM user_locations WHERE telegram_id = $1`,
      [userId],
    );
    if (result.rows.length === 0) return res.json({ coords: null, isLive: false });
    const row = result.rows[0];
    res.json({
      coords: row.longitude && row.latitude ? [row.longitude, row.latitude] : null,
      accuracy: row.accuracy,
      isLive: Boolean(row.is_live),
      updatedAt: row.updated_at ? new Date(row.updated_at).getTime() : undefined,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    res.status(500).json({ error: 'internal_error' });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API listening on ${port}`);
});
