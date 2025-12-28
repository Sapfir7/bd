import { useMemo, useState } from 'react';
import { FixedSizeList } from 'react-window';
import { Plus, Search } from 'lucide-react';
import { useFriendsStore } from '../stores/friendsStore';

const statusColor: Record<string, string> = {
  online: '#00D084',
  idle: '#FFC107',
  offline: '#94a3b8',
};

function ProfileView() {
  const friends = useFriendsStore((state) => state.friends);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const lower = query.toLowerCase();
    return friends.filter((f) => f.name.toLowerCase().includes(lower));
  }, [friends, query]);

  return (
    <div className="flex flex-col gap-4">
      <section className="rounded-xl bg-white p-4 shadow-card">
        <div className="flex items-center gap-3">
          <div className="h-16 w-16 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
            <img src="https://api.dicebear.com/7.x/identicon/svg?seed=user" alt="You" className="h-full w-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-900">You</h2>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">online</span>
            </div>
            <p className="text-sm text-slate-600">Staying connected with your crew.</p>
          </div>
          <button className="flex items-center gap-1 rounded-full bg-primary px-3 py-2 text-xs font-semibold text-white shadow-card">
            <Plus className="h-4 w-4" /> Add friend
          </button>
        </div>
      </section>

      <section className="rounded-xl bg-white p-4 shadow-card">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Friends</p>
            <h3 className="text-lg font-bold text-slate-900">{filtered.length} nearby</h3>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search friends"
              className="w-48 rounded-full border border-slate-200 bg-slate-50 px-10 py-2 text-sm focus:border-primary"
            />
          </div>
        </div>

        <div className="h-[60vh] min-h-[320px] overflow-hidden">
          <FixedSizeList height={360} width="100%" itemCount={filtered.length} itemSize={78} itemData={filtered}>
            {({ index, style, data }) => {
              const friend = data[index];
              const lastSeen = friend.trail[0]?.coords;
              return (
                <div style={style} className="px-2">
                  <div className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 shadow-sm">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border border-slate-200 bg-white">
                      <img src={friend.avatar} alt={friend.name} className="h-full w-full object-cover" />
                      <span
                        className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white"
                        style={{ backgroundColor: statusColor[friend.status] || statusColor.offline }}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900">{friend.name}</p>
                      <p className="text-xs text-slate-500">Last seen: {lastSeen ? `${lastSeen[1].toFixed(3)}, ${lastSeen[0].toFixed(3)}` : '—'}</p>
                    </div>
                    <button className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Ping</button>
                  </div>
                </div>
              );
            }}
          </FixedSizeList>
        </div>
      </section>
    </div>
  );
}

export default ProfileView;
