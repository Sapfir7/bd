from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from ..database import get_session
from ..models import Complaint
from ..schemas.complaints import ComplaintCreate, ComplaintOut, ComplaintResolve

router = APIRouter(prefix="/complaints", tags=["complaints"])


def _get_db():
    with get_session() as session:
        yield session


@router.post("", response_model=ComplaintOut)
def create_complaint(payload: ComplaintCreate, db: Session = Depends(_get_db)):
    complaint = Complaint(**payload.dict())
    db.add(complaint)
    db.commit()
    db.refresh(complaint)
    return complaint


@router.get("", response_model=List[ComplaintOut])
def list_complaints(db: Session = Depends(_get_db)):
    return db.query(Complaint).order_by(Complaint.created_at.desc()).all()


@router.put("/{complaint_id}/resolve", response_model=ComplaintOut)
def resolve_complaint(complaint_id: int, payload: ComplaintResolve, db: Session = Depends(_get_db)):
    complaint = db.query(Complaint).get(complaint_id)
    if not complaint:
        raise HTTPException(status_code=404, detail="Complaint not found")
    for key, value in payload.dict(exclude_unset=True).items():
        setattr(complaint, key, value)
    db.add(complaint)
    db.commit()
    db.refresh(complaint)
    return complaint
