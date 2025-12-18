from aiogram import Dispatcher
from aiogram.filters import CommandStart, Command
from aiogram.types import InlineKeyboardButton, InlineKeyboardMarkup, Message, WebAppInfo


def register_start_handlers(dp: Dispatcher, mini_app_url: str, ensure_user):
    @dp.message(CommandStart())
    async def handle_start(message: Message):
        ensure_user(message.from_user.id, message.from_user.username)
        keyboard = InlineKeyboardMarkup(
            inline_keyboard=[[InlineKeyboardButton(text="Открыть карту", web_app=WebAppInfo(url=mini_app_url))]]
        )
        await message.answer(
            "Привет! Отправь геолокацию или нажми, чтобы открыть карту событий.", reply_markup=keyboard
        )

    @dp.message(Command("map"))
    async def handle_map(message: Message):
        keyboard = InlineKeyboardMarkup(
            inline_keyboard=[[InlineKeyboardButton(text="Открыть карту", web_app=WebAppInfo(url=mini_app_url))]]
        )
        await message.answer("Открываю карту", reply_markup=keyboard)
