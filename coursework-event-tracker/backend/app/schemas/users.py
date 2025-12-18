from datetime import datetime
from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel


class UserCreate(BaseModel):
    telegram_id: str
    username: str
    password_hash: str


class UserProfileUpdate(BaseModel):
    full_name: Optional[str]
    bio: Optional[str]
    avatar_url: Optional[str]


class UserProfileOut(UserProfileUpdate):
    reputation_score: int
    last_latitude: Optional[float] = None
    last_longitude: Optional[float] = None
    location_updated_at: Optional[datetime] = None

    class Config:
        orm_mode = True


class UserOut(BaseModel):
    id: int
    telegram_id: str
    username: str
    is_active: bool
    created_at: datetime
    profile: Optional[UserProfileOut]
    roles: List[str] = []

    class Config:
        orm_mode = True
