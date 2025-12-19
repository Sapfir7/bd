import os
from datetime import datetime

import requests
from aiogram import Dispatcher
from aiogram.filters import Command
from aiogram.types import KeyboardButton, Message, ReplyKeyboardMarkup

API_BASE = os.getenv("API_BASE", "http://backend:8000/api")


def register_location_handlers(dp: Dispatcher, ensure_user):
    request_location_kb = ReplyKeyboardMarkup(
        keyboard=[[KeyboardButton(text="Отправить геолокацию", request_location=True)]], resize_keyboard=True
    )

    @dp.message(Command("location"))
    async def ask_location(message: Message):
        ensure_user(message.from_user.id, message.from_user.username)
        await message.answer("Поделись геопозицией для поиска событий рядом", reply_markup=request_location_kb)

    @dp.message()
    async def save_location(message: Message):
        if not message.location:
            return
        user_id = ensure_user(message.from_user.id, message.from_user.username)
        if user_id <= 0:
            await message.answer("Не удалось определить пользователя. Попробуйте позже.")
            return
        payload = {
            "last_latitude": message.location.latitude,
            "last_longitude": message.location.longitude,
            "location_updated_at": datetime.utcnow().isoformat(),
        }
        try:
            response = requests.put(
                f"{API_BASE}/users/{user_id}/profile",
                json=payload,
                timeout=5,
            )
            if response.status_code != 200:
                await message.answer("Не удалось сохранить геолокацию. Попробуйте позже.")
                return
        except requests.RequestException:
            await message.answer("Не удалось сохранить геолокацию. Попробуйте позже.")
            return
        await message.answer("Геолокация сохранена! Теперь можно открывать карту и искать события.")
