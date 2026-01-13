from aiogram import Router, types
from aiogram.filters import CommandStart
from aiogram.types import WebAppInfo, KeyboardButton, ReplyKeyboardMarkup
import os

router = Router()

WEBAPP_URL = os.getenv("WEBAPP_URL", "http://localhost:8080")


@router.message(CommandStart())
async def cmd_start(message: types.Message):
    # Создаем клавиатуру с кнопкой Web App
    keyboard = ReplyKeyboardMarkup(
        keyboard=[
            [KeyboardButton(text="🗺 Открыть карту", web_app=WebAppInfo(url=WEBAPP_URL))]
        ],
        resize_keyboard=True
    )
    
    await message.answer(
        f"👋 Привет, {message.from_user.first_name}!\n\n"
        f"Добро пожаловать в Event Tracker — сервис для поиска мероприятий на карте.\n\n"
        f"📍 Отправь мне свою геолокацию, чтобы я запомнил твоё местоположение.\n"
        f"🗺 Нажми на кнопку ниже, чтобы открыть карту с мероприятиями.",
        reply_markup=keyboard
    )
