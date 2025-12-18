-- Core tables
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    telegram_id VARCHAR(64) UNIQUE NOT NULL,
    username VARCHAR(64) NOT NULL,
    password_hash VARCHAR(256) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    role_name VARCHAR(32) UNIQUE NOT NULL,
    description TEXT
);

CREATE TABLE user_roles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    role_id INTEGER NOT NULL REFERENCES roles(id) ON DELETE CASCADE ON UPDATE CASCADE,
    assigned_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_user_roles_user_role UNIQUE (user_id, role_id)
);

CREATE TABLE user_profiles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    full_name VARCHAR(128),
    bio TEXT,
    avatar_url VARCHAR(512),
    reputation_score INTEGER NOT NULL DEFAULT 0,
    last_latitude DOUBLE PRECISION,
    last_longitude DOUBLE PRECISION,
    location_updated_at TIMESTAMP
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(64) UNIQUE NOT NULL,
    description TEXT
);

CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    latitude DOUBLE PRECISION NOT NULL,
    longitude DOUBLE PRECISION NOT NULL,
    event_date TIMESTAMP NOT NULL,
    status VARCHAR(16) NOT NULL DEFAULT 'active',
    category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    created_by INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    likes_count INTEGER NOT NULL DEFAULT 0,
    participants_count INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT chk_events_status CHECK (status IN ('active','cancelled','completed'))
);
CREATE INDEX idx_events_lat_lon ON events(latitude, longitude);
CREATE INDEX idx_events_category ON events(category_id);
CREATE INDEX idx_events_status ON events(status);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    event_id INTEGER NOT NULL REFERENCES events(id) ON DELETE CASCADE ON UPDATE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    comment_text TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_comments_event ON comments(event_id);

CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    event_id INTEGER NOT NULL REFERENCES events(id) ON DELETE CASCADE ON UPDATE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_likes_event_user UNIQUE (event_id, user_id)
);
CREATE INDEX idx_likes_event ON likes(event_id);

CREATE TABLE event_participants (
    id SERIAL PRIMARY KEY,
    event_id INTEGER NOT NULL REFERENCES events(id) ON DELETE CASCADE ON UPDATE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    joined_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_event_participants UNIQUE (event_id, user_id)
);

CREATE TABLE complaints (
    id SERIAL PRIMARY KEY,
    target_type VARCHAR(16) NOT NULL,
    target_id INTEGER NOT NULL,
    reported_by INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    reason TEXT NOT NULL,
    status VARCHAR(16) NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    resolved_at TIMESTAMP,
    resolved_by INTEGER REFERENCES users(id) ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT chk_complaints_status CHECK (status IN ('pending','resolved','rejected'))
);

CREATE TABLE audit_log (
    id SERIAL PRIMARY KEY,
    table_name VARCHAR(64) NOT NULL,
    record_id INTEGER NOT NULL,
    action VARCHAR(8) NOT NULL,
    old_values JSONB,
    new_values JSONB,
    changed_by INTEGER REFERENCES users(id) ON DELETE SET NULL ON UPDATE CASCADE,
    changed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_audit_log_table ON audit_log(table_name);
CREATE INDEX idx_audit_log_changed_at ON audit_log(changed_at);

CREATE TABLE import_errors (
    id SERIAL PRIMARY KEY,
    source VARCHAR(64) NOT NULL,
    row_data JSONB NOT NULL,
    error_message TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Check for referential integrity on complaints target
ALTER TABLE complaints ADD CONSTRAINT chk_complaints_target CHECK (target_type IN ('event','comment'));

-- Example EXPLAIN ANALYZE before indexes (execute in psql):
-- EXPLAIN ANALYZE SELECT * FROM events WHERE category_id = 1;
-- After indexes: uses idx_events_category to speed up filtering.
