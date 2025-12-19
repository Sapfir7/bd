import os
import random
from datetime import datetime, timedelta

import psycopg2
from dotenv import load_dotenv
from faker import Faker

load_dotenv()

DB_URL = os.getenv("DATABASE_URL", "postgresql://postgres:postgres@localhost:5432/event_tracker")
fake = Faker()


def get_conn():
    return psycopg2.connect(DB_URL)


def seed():
    conn = get_conn()
    cur = conn.cursor()

    # seed roles
    cur.execute("INSERT INTO roles (role_name, description) VALUES ('user','Базовая роль') ON CONFLICT DO NOTHING;")
    cur.execute("INSERT INTO roles (role_name, description) VALUES ('moderator','Модератор') ON CONFLICT DO NOTHING;")
    cur.execute("INSERT INTO roles (role_name, description) VALUES ('admin','Администратор') ON CONFLICT DO NOTHING;")

    users = []
    for _ in range(150):
        cur.execute(
            "INSERT INTO users (telegram_id, username, password_hash) VALUES (%s,%s,%s) RETURNING id",
            (fake.uuid4(), fake.user_name(), fake.sha256()),
        )
        users.append(cur.fetchone()[0])
    conn.commit()

    for user_id in users:
        cur.execute(
            "INSERT INTO user_profiles (user_id, full_name, bio, avatar_url, reputation_score, last_latitude, last_longitude, location_updated_at) VALUES (%s,%s,%s,%s,%s,%s,%s,%s) ON CONFLICT DO NOTHING",
            (
                user_id,
                fake.name(),
                fake.sentence(),
                fake.image_url(),
                random.randint(0, 100),
                float(fake.latitude()),
                float(fake.longitude()),
                datetime.utcnow(),
            ),
        )
    conn.commit()

    categories = [
        "Развлечения и досуг",
        "Спорт и активности",
        "Образование",
        "Еда и напитки",
        "Культура и искусство",
        "Срочные события",
        "Шопинг и маркеты",
        "Природа и прогулки",
    ]
    for cat in categories:
        cur.execute("INSERT INTO categories (category_name, description) VALUES (%s,%s) ON CONFLICT DO NOTHING", (cat, fake.sentence()))
    conn.commit()

    # events
    event_ids = []
    for _ in range(1000):
        event_date = datetime.utcnow() + timedelta(days=random.randint(-30, 60))
        cur.execute(
            """
            INSERT INTO events (title, description, latitude, longitude, event_date, status, category_id, created_by)
            VALUES (%s,%s,%s,%s,%s,%s,(SELECT id FROM categories ORDER BY RANDOM() LIMIT 1), %s) RETURNING id
            """,
            (fake.sentence(nb_words=4), fake.paragraph(), float(fake.latitude()), float(fake.longitude()), event_date, random.choice(["active","cancelled","completed"]), random.choice(users)),
        )
        event_ids.append(cur.fetchone()[0])
    conn.commit()

    # comments
    for _ in range(5000):
        cur.execute(
            "INSERT INTO comments (event_id, user_id, comment_text) VALUES (%s,%s,%s)",
            (random.choice(event_ids), random.choice(users), fake.sentence()),
        )
    conn.commit()

    # likes
    for _ in range(5000):
        try:
            cur.execute(
                "INSERT INTO likes (event_id, user_id) VALUES (%s,%s)",
                (random.choice(event_ids), random.choice(users)),
            )
        except psycopg2.Error:
            conn.rollback()
        else:
            conn.commit()

    # participants
    for _ in range(3000):
        try:
            cur.execute(
                "INSERT INTO event_participants (event_id, user_id) VALUES (%s,%s)",
                (random.choice(event_ids), random.choice(users)),
            )
        except psycopg2.Error:
            conn.rollback()
        else:
            conn.commit()

    conn.close()


if __name__ == "__main__":
    seed()
    print("Database seeded with test data")
