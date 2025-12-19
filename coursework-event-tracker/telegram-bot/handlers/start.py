from aiogram import Dispatcher
from aiogram.filters import CommandStart, Command
from aiogram.types import InlineKeyboardButton, InlineKeyboardMarkup, Message, WebAppInfo


def register_start_handlers(dp: Dispatcher, mini_app_url: str, ensure_user):
    def build_keyboard():
        if mini_app_url.startswith("https://"):
            return InlineKeyboardMarkup(
                inline_keyboard=[[InlineKeyboardButton(text="Открыть карту", web_app=WebAppInfo(url=mini_app_url))]]
            )
        return None

    @dp.message(CommandStart())
    async def handle_start(message: Message):
        ensure_user(message.from_user.id, message.from_user.username)
        keyboard = build_keyboard()
        if not keyboard:
            await message.answer(
                "Привет! Для открытия карты нужен HTTPS URL Mini App. "
                "Проверь MINI_APP_URL (например, через cloudflared)."
            )
            return
        await message.answer(
            "Привет! Отправь геолокацию или нажми, чтобы открыть карту событий.",
            reply_markup=keyboard,
        )

    @dp.message(Command("map"))
    async def handle_map(message: Message):
        keyboard = build_keyboard()
        if not keyboard:
            await message.answer("Mini App URL должен быть HTTPS. Обнови MINI_APP_URL.")
            return
        await message.answer("Открываю карту", reply_markup=keyboard)
