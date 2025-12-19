import asyncio
import hashlib
import hmac
import logging
import os
from typing import Dict

import requests
from aiogram import Bot, Dispatcher
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode
from aiogram.types import BotCommand

from config import BOT_TOKEN, MINI_APP_URL
from handlers.start import register_start_handlers
from handlers.location import register_location_handlers

logging.basicConfig(level=logging.INFO)

API_BASE = os.getenv("API_BASE", "http://backend:8000/api")

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


def ensure_user(telegram_id: int, username: str | None) -> int:
    try:
        response = requests.get(
            f"{API_BASE}/users/me",
            headers={"X-Telegram-User-ID": str(telegram_id)},
            timeout=5,
        )
        if response.status_code == 200:
            return response.json()["id"]
    except requests.RequestException as exc:
        logging.error("Failed to fetch user: %s", exc)

    try:
        response = requests.post(
            f"{API_BASE}/users",
            json={
                "telegram_id": str(telegram_id),
                "username": username or "anonymous",
                "password_hash": "telegram",
            },
            timeout=5,
        )
        if response.status_code == 200:
            return response.json()["id"]
    except requests.RequestException as exc:
        logging.error("Failed to create user: %s", exc)

    return -1


async def on_startup(bot: Bot):
    await bot.set_my_commands([
        BotCommand(command="start", description="Начать"),
        BotCommand(command="map", description="Открыть карту"),
    ])


def main():
    if not BOT_TOKEN:
        raise RuntimeError("BOT_TOKEN is not configured")

    bot = Bot(
        token=BOT_TOKEN,
        default=DefaultBotProperties(parse_mode=ParseMode.HTML),
    )
    dp = Dispatcher()

    register_start_handlers(dp, MINI_APP_URL, ensure_user)
    register_location_handlers(dp, ensure_user)

    loop = asyncio.get_event_loop()
    loop.create_task(on_startup(bot))
    dp.run_polling(bot)


if __name__ == "__main__":
    main()
