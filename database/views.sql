-- Top 10 active events sorted by likes and participants
CREATE OR REPLACE VIEW top_events_view AS
SELECT id, title, likes_count, participants_count, status
FROM events
WHERE status = 'active'
ORDER BY likes_count DESC, participants_count DESC
LIMIT 10;

-- User activity statistics
CREATE OR REPLACE VIEW user_activity_stats AS
SELECT
    u.id AS user_id,
    u.username,
    COALESCE(ev.count, 0) AS events_created,
    COALESCE(cm.count, 0) AS comments_posted,
    COALESCE(lk.count, 0) AS likes_given,
    COALESCE(ep.count, 0) AS participations
FROM users u
LEFT JOIN (
    SELECT created_by, COUNT(*) FROM events GROUP BY created_by
) ev ON ev.created_by = u.id
LEFT JOIN (
    SELECT user_id, COUNT(*) FROM comments GROUP BY user_id
) cm ON cm.user_id = u.id
LEFT JOIN (
    SELECT user_id, COUNT(*) FROM likes GROUP BY user_id
) lk ON lk.user_id = u.id
LEFT JOIN (
    SELECT user_id, COUNT(*) FROM event_participants GROUP BY user_id
) ep ON ep.user_id = u.id;

-- Pending complaints for moderators
CREATE OR REPLACE VIEW pending_complaints_view AS
SELECT c.id, c.target_type, c.target_id, c.reason, c.reported_by, c.created_at
FROM complaints c
WHERE c.status = 'pending';
