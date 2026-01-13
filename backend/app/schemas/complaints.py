from datetime import datetime
from typing import Optional

from pydantic import BaseModel


class ComplaintCreate(BaseModel):
    target_type: str
    target_id: int
    reported_by: int
    reason: str


class ComplaintResolve(BaseModel):
    status: str
    resolved_by: int
    resolved_at: Optional[datetime] = None


class ComplaintOut(BaseModel):
    id: int
    target_type: str
    target_id: int
    reported_by: int
    reason: str
    status: str
    created_at: datetime
    resolved_at: Optional[datetime]
    resolved_by: Optional[int]

    class Config:
        from_attributes = True
