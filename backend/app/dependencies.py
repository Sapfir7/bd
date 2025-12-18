from fastapi import Depends, HTTPException, Request
from sqlalchemy.orm import Session

from .database import get_session
from .models import User


def get_db():
    with get_session() as session:
        yield session


def get_current_user_from_telegram(telegram_id: str, db: Session) -> User:
    user = db.query(User).filter(User.telegram_id == str(telegram_id)).first()
    if not user:
        raise HTTPException(status_code=401, detail="User not registered")
    return user


def get_current_user_id(request: Request, db: Session = Depends(get_db)) -> int:
    telegram_id = getattr(request.state, "telegram_user_id", None)
    if not telegram_id:
        raise HTTPException(status_code=401, detail="Missing X-Telegram-User-ID header")
    return get_current_user_from_telegram(telegram_id, db).id
