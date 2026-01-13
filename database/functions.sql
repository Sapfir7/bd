-- Scalar function: reputation based on events, likes and comments
CREATE OR REPLACE FUNCTION calculate_user_reputation(p_user_id INT)
RETURNS INT AS $$
DECLARE
    events_cnt INT;
    likes_cnt INT;
    comments_cnt INT;
    score INT;
BEGIN
    SELECT COUNT(*) INTO events_cnt FROM events WHERE created_by = p_user_id;
    SELECT COUNT(*) INTO likes_cnt FROM likes l JOIN events e ON e.id = l.event_id WHERE e.created_by = p_user_id;
    SELECT COUNT(*) INTO comments_cnt FROM comments WHERE user_id = p_user_id;
    score := events_cnt * 5 + likes_cnt * 2 + comments_cnt;
    RETURN COALESCE(score, 0);
END;
$$ LANGUAGE plpgsql;

-- Table-valued function: events in radius using Haversine
CREATE OR REPLACE FUNCTION get_events_in_radius(p_lat DOUBLE PRECISION, p_lon DOUBLE PRECISION, p_radius_km DOUBLE PRECISION)
RETURNS TABLE(
    id INT,
    title VARCHAR,
    description TEXT,
    distance_km DOUBLE PRECISION,
    event_date TIMESTAMP,
    category_id INT,
    likes_count INT,
    participants_count INT
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        e.id,
        e.title,
        e.description,
        2 * 6371 * ASIN(SQRT(POWER(SIN(RADIANS(e.latitude - p_lat) / 2), 2) + COS(RADIANS(p_lat)) * COS(RADIANS(e.latitude)) * POWER(SIN(RADIANS(e.longitude - p_lon) / 2), 2))) AS distance_km,
        e.event_date,
        e.category_id,
        e.likes_count,
        e.participants_count
    FROM events e
    WHERE 2 * 6371 * ASIN(SQRT(POWER(SIN(RADIANS(e.latitude - p_lat) / 2), 2) + COS(RADIANS(p_lat)) * COS(RADIANS(e.latitude)) * POWER(SIN(RADIANS(e.longitude - p_lon) / 2), 2))) <= p_radius_km;
END;
$$ LANGUAGE plpgsql;

-- Optional top events by period
CREATE OR REPLACE FUNCTION get_top_events_by_period(p_start TIMESTAMP, p_end TIMESTAMP, p_limit INT)
RETURNS TABLE(
    id INT,
    title VARCHAR,
    likes_count INT,
    participants_count INT
) AS $$
BEGIN
    RETURN QUERY
    SELECT id, title, likes_count, participants_count
    FROM events
    WHERE event_date BETWEEN p_start AND p_end
    ORDER BY likes_count DESC, participants_count DESC
    LIMIT p_limit;
END;
$$ LANGUAGE plpgsql;
