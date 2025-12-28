import asyncio
import os
from datetime import datetime, timezone

import asyncpg
from telegram import KeyboardButton, ReplyKeyboardMarkup, Update
from telegram.constants import ParseMode
from telegram.ext import Application, CallbackContext, CommandHandler, MessageHandler, filters

BOT_TOKEN = os.getenv("BOT_TOKEN")
DATABASE_URL = os.getenv("DATABASE_URL")

if not BOT_TOKEN:
    raise RuntimeError("BOT_TOKEN is required")
if not DATABASE_URL:
    raise RuntimeError("DATABASE_URL is required")


async def get_pool() -> asyncpg.Pool:
    return await asyncpg.create_pool(DATABASE_URL, min_size=1, max_size=5)


async def ensure_user(pool: asyncpg.Pool, update: Update) -> None:
    user = update.effective_user
    if not user:
        return
    async with pool.acquire() as conn:
        await conn.execute(
            """
            INSERT INTO users (telegram_id, username, created_at)
            VALUES ($1, $2, $3)
            ON CONFLICT (telegram_id) DO UPDATE SET username = EXCLUDED.username
            """,
            user.id,
            user.username,
            datetime.now(timezone.utc),
        )


async def upsert_location(pool: asyncpg.Pool, user_id: int, lat: float, lng: float, accuracy: float | None, is_live: bool) -> None:
    now = datetime.now(timezone.utc)
    async with pool.acquire() as conn:
        await conn.execute(
            """
            INSERT INTO user_locations (telegram_id, latitude, longitude, accuracy, is_live, updated_at)
            VALUES ($1, $2, $3, $4, $5, $6)
            ON CONFLICT (telegram_id) DO UPDATE SET
              latitude = EXCLUDED.latitude,
              longitude = EXCLUDED.longitude,
              accuracy = EXCLUDED.accuracy,
              is_live = EXCLUDED.is_live,
              updated_at = EXCLUDED.updated_at
            """,
            user_id,
            lat,
            lng,
            accuracy,
            is_live,
            now,
        )
        await conn.execute(
            """
            INSERT INTO location_trail (telegram_id, latitude, longitude, timestamp)
            VALUES ($1, $2, $3, $4)
            """,
            user_id,
            lat,
            lng,
            now,
        )


async def start(update: Update, context: CallbackContext) -> None:
    pool: asyncpg.Pool = context.application.bot_data["pool"]
    await ensure_user(pool, update)
    keyboard = ReplyKeyboardMarkup(
        [[KeyboardButton(text="📍 Share Live Location", request_location=True)]],
        resize_keyboard=True,
    )
    await update.effective_message.reply_text(
        "Send your live location to start sharing.", reply_markup=keyboard, parse_mode=ParseMode.HTML
    )


async def stop(update: Update, context: CallbackContext) -> None:
    pool: asyncpg.Pool = context.application.bot_data["pool"]
    user = update.effective_user
    if not user:
        return
    async with pool.acquire() as conn:
        await conn.execute(
            "UPDATE user_locations SET is_live = FALSE, updated_at = $2 WHERE telegram_id = $1",
            user.id,
            datetime.now(timezone.utc),
        )
    await update.effective_message.reply_text("Live sharing stopped. You can /start again anytime.")


async def handle_location(update: Update, context: CallbackContext) -> None:
    pool: asyncpg.Pool = context.application.bot_data["pool"]
    message = update.effective_message
    if not message or not message.location:
        return

    location = message.location
    if location.live_period is None:
        await message.reply_text("Please send a live location (choose Share Live Location).")
        return

    user = update.effective_user
    if not user:
        return

    await ensure_user(pool, update)
    await upsert_location(pool, user.id, location.latitude, location.longitude, location.horizontal_accuracy, True)


async def main() -> None:
    pool = await get_pool()
    application = Application.builder().token(BOT_TOKEN).build()
    application.bot_data["pool"] = pool

    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("stop", stop))
    application.add_handler(MessageHandler(filters.LOCATION, handle_location))
    application.add_handler(MessageHandler(filters.UpdateType.EDITED_MESSAGE, handle_location))

    await application.initialize()
    await application.start()
    await application.updater.start_polling()
    await application.updater.idle()


if __name__ == "__main__":
    asyncio.run(main())
