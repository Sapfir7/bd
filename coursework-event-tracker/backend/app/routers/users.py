from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from ..dependencies import get_current_user_id, get_db
from ..models import User, UserProfile
from ..schemas.users import UserCreate, UserOut, UserProfileUpdate

router = APIRouter(prefix="/users", tags=["users"])


def _get_db():
    yield from get_db()


@router.post("", response_model=UserOut)
def create_user(payload: UserCreate, db: Session = Depends(_get_db)):
    user = User(**payload.dict())
    db.add(user)
    db.commit()
    db.refresh(user)
    profile = UserProfile(user_id=user.id)
    db.add(profile)
    db.commit()
    db.refresh(user)
    return user


@router.get("/{user_id}", response_model=UserOut)
def get_user(user_id: int, db: Session = Depends(_get_db)):
    user = db.query(User).get(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    user.roles = [r.role.role_name for r in user.roles]
    return user


@router.put("/{user_id}/profile", response_model=UserOut)
def update_profile(user_id: int, payload: UserProfileUpdate, db: Session = Depends(_get_db)):
    user = db.query(User).get(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    if not user.profile:
        user.profile = UserProfile(user_id=user.id)
    for key, value in payload.dict(exclude_unset=True).items():
        setattr(user.profile, key, value)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


@router.get("/me", response_model=UserOut)
def get_me(user_id: int = Depends(get_current_user_id), db: Session = Depends(_get_db)):
    user = db.query(User).get(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    user.roles = [r.role.role_name for r in user.roles]
    return user
