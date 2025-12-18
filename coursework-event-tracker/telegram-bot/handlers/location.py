from datetime import datetime

from aiogram import Dispatcher
from aiogram.filters import Command
from aiogram.types import KeyboardButton, Message, ReplyKeyboardMarkup

from app.models import UserProfile
from app.database import SessionLocal


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
        with SessionLocal() as session:
            profile = session.query(UserProfile).filter(UserProfile.user_id == user_id).first()
            if profile:
                profile.last_latitude = message.location.latitude
                profile.last_longitude = message.location.longitude
                profile.location_updated_at = datetime.utcnow()
                session.add(profile)
                session.commit()
        await message.answer("Геолокация сохранена! Теперь можно открывать карту и искать события.")
