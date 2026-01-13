from aiogram import Router, types
from aiogram.types import Message
from sqlalchemy import text
import logging

router = Router()
logger = logging.getLogger(__name__)


@router.message(lambda message: message.location is not None)
async def handle_location(message: Message):
    from bot import SessionLocal  # Импорт внутри функции
    
    user_id = message.from_user.id
    username = message.from_user.username or message.from_user.first_name
    latitude = message.location.latitude
    longitude = message.location.longitude
    
    session = SessionLocal()
    try:
        # Проверяем, существует ли пользователь
        result = session.execute(
            text("SELECT id FROM users WHERE telegram_id = :tg_id"),
            {"tg_id": str(user_id)}
        ).fetchone()
        
        if not result:
            # Создаем нового пользователя
            session.execute(
                text("""
                    INSERT INTO users (telegram_id, username, password_hash)
                    VALUES (:tg_id, :username, 'telegram_auth')
                """),
                {"tg_id": str(user_id), "username": username}
            )
            session.commit()
            
            # Получаем ID нового пользователя
            result = session.execute(
                text("SELECT id FROM users WHERE telegram_id = :tg_id"),
                {"tg_id": str(user_id)}
            ).fetchone()
        
        db_user_id = result[0]
        
        # Обновляем или создаем профиль с геолокацией
        session.execute(
            text("""
                INSERT INTO user_profiles (user_id, last_latitude, last_longitude, last_location_updated)
                VALUES (:user_id, :lat, :lon, NOW())
                ON CONFLICT (user_id) 
                DO UPDATE SET 
                    last_latitude = :lat,
                    last_longitude = :lon,
                    last_location_updated = NOW()
            """),
            {"user_id": db_user_id, "lat": latitude, "lon": longitude}
        )
        session.commit()
        
        await message.answer(
            f"✅ Геолокация сохранена!\n"
            f"📍 Координаты: {latitude:.4f}, {longitude:.4f}\n\n"
            f"Теперь карта будет центрирована на вашем местоположении."
        )
        
    except Exception as e:
        logger.error(f"Ошибка при сохранении геолокации: {e}")
        session.rollback()
        await message.answer("❌ Произошла ошибка при сохранении геолокации.")
    finally:
        session.close()
