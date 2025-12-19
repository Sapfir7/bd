from datetime import datetime, timedelta
from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import func
from sqlalchemy.orm import Session

from ..database import get_session
from ..models import Comment, Event, EventParticipant, Like, User

router = APIRouter(prefix="/analytics", tags=["analytics"])


def _get_db():
    with get_session() as session:
        yield session


@router.get("/top-events")
def top_events(period: int = 7, limit: int = 10, db: Session = Depends(_get_db)):
    since = datetime.utcnow() - timedelta(days=period)
    query = (
        db.query(Event)
        .filter(Event.event_date >= since)
        .order_by(Event.likes_count.desc(), Event.participants_count.desc())
        .limit(limit)
    )
    return query.all()


@router.get("/user-stats/{user_id}")
def user_stats(user_id: int, db: Session = Depends(_get_db)):
    user = db.query(User).get(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    events_count = db.query(func.count(Event.id)).filter(Event.created_by == user_id).scalar()
    comments_count = db.query(func.count(Comment.id)).filter(Comment.user_id == user_id).scalar()
    likes_count = db.query(func.count(Like.id)).filter(Like.user_id == user_id).scalar()
    participant_count = db.query(func.count(EventParticipant.id)).filter(EventParticipant.user_id == user_id).scalar()
    return {
        "user_id": user_id,
        "events": events_count,
        "comments": comments_count,
        "likes": likes_count,
        "participations": participant_count,
    }
