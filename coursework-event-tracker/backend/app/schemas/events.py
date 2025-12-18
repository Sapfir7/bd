from datetime import datetime
from typing import Optional

from pydantic import BaseModel, Field


class EventBase(BaseModel):
    title: str
    description: Optional[str] = None
    latitude: float
    longitude: float
    event_date: datetime
    status: Optional[str] = Field(default="active")
    category_id: int


class EventCreate(EventBase):
    created_by: Optional[int] = None


class EventUpdate(BaseModel):
    title: Optional[str]
    description: Optional[str]
    latitude: Optional[float]
    longitude: Optional[float]
    event_date: Optional[datetime]
    status: Optional[str]
    category_id: Optional[int]


class EventOut(EventBase):
    id: int
    created_by: int
    created_at: datetime
    updated_at: datetime
    likes_count: int
    participants_count: int

    class Config:
        orm_mode = True
