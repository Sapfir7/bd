import asyncio
import hashlib
import hmac
import logging
import sys
from datetime import datetime
from pathlib import Path
from typing import Dict

from aiogram import Bot, Dispatcher
from aiogram.enums import ParseMode
from aiogram.types import BotCommand
from sqlalchemy.orm import sessionmaker

from config import BOT_TOKEN, MINI_APP_URL

BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.append(str(BASE_DIR / "backend"))

from app.database import engine  # noqa: E402
from app.models import User, UserProfile  # noqa: E402
from handlers.start import register_start_handlers  # noqa: E402
from handlers.location import register_location_handlers  # noqa: E402

logging.basicConfig(level=logging.INFO)

SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)

def validate_telegram_webapp_data(init_data: str) -> bool:
    if not init_data or not BOT_TOKEN:
        return False
    data_check = []
    params: Dict[str, str] = {}
    for pair in init_data.split("&"):
        if "=" in pair:
            key, value = pair.split("=", 1)
            params[key] = value
    for key in sorted(k for k in params.keys() if k != "hash"):
        data_check.append(f"{key}={params[key]}")
    data_check_string = "\n".join(data_check)
    secret_key = hmac.new(f"WebAppData{BOT_TOKEN}".encode(), digestmod=hashlib.sha256).digest()
    calculated_hash = hmac.new(secret_key, data_check_string.encode(), hashlib.sha256).hexdigest()
    return params.get("hash") == calculated_hash


def get_session():
    return SessionLocal()


def ensure_user(telegram_id: int, username: str | None) -> int:
    with get_session() as session:
        existing = session.query(User).filter(User.telegram_id == str(telegram_id)).first()
        if existing:
            return existing.id
        user = User(
            telegram_id=str(telegram_id),
            username=username or "anonymous",
            password_hash="telegram"
        )
        session.add(user)
        session.commit()
        session.refresh(user)
        profile = UserProfile(user_id=user.id, location_updated_at=datetime.utcnow())
        session.add(profile)
        session.commit()
        return user.id


async def on_startup(bot: Bot):
    await bot.set_my_commands([
        BotCommand(command="start", description="Начать"),
        BotCommand(command="map", description="Открыть карту"),
    ])


def main():
    if not BOT_TOKEN:
        raise RuntimeError("BOT_TOKEN is not configured")

    bot = Bot(token=BOT_TOKEN, parse_mode=ParseMode.HTML)
    dp = Dispatcher()

    register_start_handlers(dp, MINI_APP_URL, ensure_user)
    register_location_handlers(dp, ensure_user)

    loop = asyncio.get_event_loop()
    loop.create_task(on_startup(bot))
    dp.run_polling(bot)


if __name__ == "__main__":
    main()
