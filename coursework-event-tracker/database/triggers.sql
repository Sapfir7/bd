-- Audit trigger for events
CREATE OR REPLACE FUNCTION fn_log_event_changes()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO audit_log(table_name, record_id, action, new_values)
        VALUES ('events', NEW.id, TG_OP, row_to_json(NEW));
        RETURN NEW;
    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO audit_log(table_name, record_id, action, old_values, new_values)
        VALUES ('events', NEW.id, TG_OP, row_to_json(OLD), row_to_json(NEW));
        RETURN NEW;
    ELSE
        INSERT INTO audit_log(table_name, record_id, action, old_values)
        VALUES ('events', OLD.id, TG_OP, row_to_json(OLD));
        RETURN OLD;
    END IF;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_events_audit
AFTER INSERT OR UPDATE OR DELETE ON events
FOR EACH ROW EXECUTE FUNCTION fn_log_event_changes();

-- Trigger to recalc likes_count
CREATE OR REPLACE FUNCTION fn_sync_likes()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE events SET likes_count = (
        SELECT COUNT(*) FROM likes WHERE event_id = COALESCE(NEW.event_id, OLD.event_id)
    ) WHERE id = COALESCE(NEW.event_id, OLD.event_id);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_likes_sync
AFTER INSERT OR DELETE ON likes
FOR EACH ROW EXECUTE FUNCTION fn_sync_likes();

-- Trigger to recalc participants_count
CREATE OR REPLACE FUNCTION fn_sync_participants()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE events SET participants_count = (
        SELECT COUNT(*) FROM event_participants WHERE event_id = COALESCE(NEW.event_id, OLD.event_id)
    ) WHERE id = COALESCE(NEW.event_id, OLD.event_id);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_participants_sync
AFTER INSERT OR DELETE ON event_participants
FOR EACH ROW EXECUTE FUNCTION fn_sync_participants();
