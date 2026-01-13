from datetime import datetime
from typing import List, Optional

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session

from ..dependencies import get_current_user_id, get_db
from ..models import Comment, Event, EventParticipant, Like
from ..schemas.comments import CommentCreate, CommentOut
from ..schemas.events import EventCreate, EventOut, EventUpdate
from ..services.geo import haversine_distance

router = APIRouter(prefix="/events", tags=["events"])


def _get_db():
    yield from get_db()


@router.post("", response_model=EventOut)
def create_event(payload: EventCreate, user_id: int = Depends(get_current_user_id), db: Session = Depends(_get_db)):
    data = payload.dict(exclude_unset=True, exclude={"created_by"})
    event = Event(**data, created_by=user_id)
    db.add(event)
    db.commit()
    db.refresh(event)
    return event


@router.get("/{event_id}", response_model=EventOut)
def get_event(event_id: int, db: Session = Depends(_get_db)):
    event = db.query(Event).get(event_id)
    if not event:
        raise HTTPException(status_code=404, detail="Event not found")
    return event


@router.get("", response_model=List[EventOut])
def list_events(
    db: Session = Depends(_get_db),
    skip: int = 0,
    limit: int = Query(20, le=100),
    category_id: Optional[int] = None,
    status: Optional[str] = None,
):
    query = db.query(Event)
    if category_id:
        query = query.filter(Event.category_id == category_id)
    if status:
        query = query.filter(Event.status == status)
    return query.offset(skip).limit(limit).all()


@router.get("/nearby", response_model=List[EventOut])
def events_nearby(
    lat: float,
    lon: float,
    radius: float = Query(5, description="Радиус в км"),
    limit: int = Query(20, le=100, description="Максимум событий"),
    db: Session = Depends(_get_db),
):
    events = db.query(Event).filter(Event.status == "active").all()
    result = []
    for event in events:
        distance = haversine_distance(lat, lon, event.latitude, event.longitude)
        if distance <= radius:
            result.append((distance, event))
    result.sort(key=lambda item: item[0])
    return [item[1] for item in result[:limit]]


@router.put("/{event_id}", response_model=EventOut)
def update_event(event_id: int, payload: EventUpdate, db: Session = Depends(_get_db)):
    event = db.query(Event).get(event_id)
    if not event:
        raise HTTPException(status_code=404, detail="Event not found")
    for key, value in payload.dict(exclude_unset=True).items():
        setattr(event, key, value)
    event.updated_at = datetime.utcnow()
    db.add(event)
    db.commit()
    db.refresh(event)
    return event


@router.delete("/{event_id}")
def delete_event(event_id: int, db: Session = Depends(_get_db)):
    event = db.query(Event).get(event_id)
    if not event:
        raise HTTPException(status_code=404, detail="Event not found")
    db.delete(event)
    db.commit()
    return {"detail": "deleted"}


@router.post("/{event_id}/like")
def toggle_like(event_id: int, user_id: int = Depends(get_current_user_id), db: Session = Depends(_get_db)):
    event = db.query(Event).get(event_id)
    if not event:
        raise HTTPException(status_code=404, detail="Event not found")
    like = db.query(Like).filter_by(event_id=event_id, user_id=user_id).first()
    if like:
        db.delete(like)
        event.likes_count = max(event.likes_count - 1, 0)
    else:
        db.add(Like(event_id=event_id, user_id=user_id))
        event.likes_count += 1
    db.commit()
    db.refresh(event)
    return {"likes_count": event.likes_count}


@router.post("/{event_id}/comments", response_model=CommentOut)
def add_comment(event_id: int, payload: CommentCreate, user_id: int = Depends(get_current_user_id), db: Session = Depends(_get_db)):
    if not db.query(Event).get(event_id):
        raise HTTPException(status_code=404, detail="Event not found")
    data = payload.dict(exclude={"user_id"})
    comment = Comment(event_id=event_id, user_id=user_id, **data)
    db.add(comment)
    db.commit()
    db.refresh(comment)
    return comment


@router.get("/{event_id}/comments", response_model=List[CommentOut])
def list_comments(event_id: int, db: Session = Depends(_get_db)):
    if not db.query(Event).get(event_id):
        raise HTTPException(status_code=404, detail="Event not found")
    return db.query(Comment).filter(Comment.event_id == event_id).order_by(Comment.created_at).all()


@router.post("/{event_id}/join")
def join_event(event_id: int, user_id: int = Depends(get_current_user_id), db: Session = Depends(_get_db)):
    event = db.query(Event).get(event_id)
    if not event:
        raise HTTPException(status_code=404, detail="Event not found")
    existing = db.query(EventParticipant).filter_by(event_id=event_id, user_id=user_id).first()
    if existing:
        return {"detail": "already joined", "participants_count": event.participants_count}
    participation = EventParticipant(event_id=event_id, user_id=user_id)
    db.add(participation)
    event.participants_count += 1
    db.commit()
    db.refresh(event)
    return {"participants_count": event.participants_count}
