from datetime import datetime
from typing import Optional

from pydantic import BaseModel


class CommentCreate(BaseModel):
    user_id: Optional[int] = None
    comment_text: str


class CommentOut(BaseModel):
    id: int
    event_id: int
    user_id: int
    comment_text: str
    created_at: datetime

    class Config:
        from_attributes = True
