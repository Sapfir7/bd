CREATE TABLE users (
  telegram_id BIGINT PRIMARY KEY,
  username TEXT,
  created_at TIMESTAMP
);

CREATE TABLE user_locations (
  telegram_id BIGINT PRIMARY KEY,
  latitude FLOAT,
  longitude FLOAT,
  accuracy FLOAT,
  is_live BOOLEAN,
  updated_at TIMESTAMP
);

CREATE TABLE location_trail (
  id SERIAL PRIMARY KEY,
  telegram_id BIGINT,
  latitude FLOAT,
  longitude FLOAT,
  timestamp TIMESTAMP
);

CREATE INDEX ON user_locations(updated_at);
CREATE INDEX ON location_trail(telegram_id, timestamp DESC);
