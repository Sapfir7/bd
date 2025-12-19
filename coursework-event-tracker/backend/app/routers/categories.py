from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..dependencies import get_db
from ..models import Category
from ..schemas.categories import CategoryOut

router = APIRouter(prefix="/categories", tags=["categories"])


def _get_db():
    yield from get_db()


@router.get("", response_model=List[CategoryOut])
def list_categories(db: Session = Depends(_get_db)):
    return db.query(Category).order_by(Category.category_name).all()
