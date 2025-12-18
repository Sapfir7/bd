from datetime import datetime
from typing import Optional

from sqlalchemy import (
    JSON,
    Boolean,
    CheckConstraint,
    Column,
    DateTime,
    Enum,
    Float,
    ForeignKey,
    Integer,
    String,
    Text,
    UniqueConstraint,
    Index,
)
from sqlalchemy.orm import relationship

from ..database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    telegram_id = Column(String(64), unique=True, nullable=False)
    username = Column(String(64), nullable=False)
    password_hash = Column(String(256), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    is_active = Column(Boolean, default=True, nullable=False)

    profile = relationship("UserProfile", back_populates="user", uselist=False, cascade="all, delete")
    roles = relationship("UserRole", back_populates="user", cascade="all, delete")
    events = relationship("Event", back_populates="creator")
    comments = relationship("Comment", back_populates="author")
    likes = relationship("Like", back_populates="user")


class Role(Base):
    __tablename__ = "roles"

    id = Column(Integer, primary_key=True)
    role_name = Column(String(32), nullable=False, unique=True)
    description = Column(Text)

    users = relationship("UserRole", back_populates="role", cascade="all, delete")


class UserRole(Base):
    __tablename__ = "user_roles"
    __table_args__ = (UniqueConstraint("user_id", "role_id", name="uq_user_roles_user_role"),)

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE", onupdate="CASCADE"), nullable=False)
    role_id = Column(Integer, ForeignKey("roles.id", ondelete="CASCADE", onupdate="CASCADE"), nullable=False)
    assigned_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    user = relationship("User", back_populates="roles")
    role = relationship("Role", back_populates="users")


class UserProfile(Base):
    __tablename__ = "user_profiles"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE", onupdate="CASCADE"), nullable=False, unique=True)
    full_name = Column(String(128))
    bio = Column(Text)
    avatar_url = Column(String(512))
    reputation_score = Column(Integer, default=0, nullable=False)
    last_latitude = Column(Float)
    last_longitude = Column(Float)
    location_updated_at: Optional[datetime] = Column(DateTime)

    user = relationship("User", back_populates="profile")


class Category(Base):
    __tablename__ = "categories"

    id = Column(Integer, primary_key=True)
    category_name = Column(String(64), nullable=False, unique=True)
    description = Column(Text)

    events = relationship("Event", back_populates="category")


class Event(Base):
    __tablename__ = "events"
    __table_args__ = (
        CheckConstraint("status in ('active','cancelled','completed')", name="chk_events_status"),
        Index("idx_events_lat_lon", "latitude", "longitude"),
        Index("idx_events_category", "category_id"),
        Index("idx_events_status", "status"),
    )

    id = Column(Integer, primary_key=True)
    title = Column(String(255), nullable=False)
    description = Column(Text)
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)
    event_date = Column(DateTime, nullable=False)
    status = Column(String(16), default="active", nullable=False)
    category_id = Column(Integer, ForeignKey("categories.id", ondelete="RESTRICT", onupdate="CASCADE"), nullable=False)
    created_by = Column(Integer, ForeignKey("users.id", ondelete="CASCADE", onupdate="CASCADE"), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)
    likes_count = Column(Integer, default=0, nullable=False)
    participants_count = Column(Integer, default=0, nullable=False)

    creator = relationship("User", back_populates="events")
    category = relationship("Category", back_populates="events")
    comments = relationship("Comment", back_populates="event", cascade="all, delete")
    likes = relationship("Like", back_populates="event", cascade="all, delete")
    participants = relationship("EventParticipant", back_populates="event", cascade="all, delete")


class Comment(Base):
    __tablename__ = "comments"
    __table_args__ = (Index("idx_comments_event", "event_id"),)

    id = Column(Integer, primary_key=True)
    event_id = Column(Integer, ForeignKey("events.id", ondelete="CASCADE", onupdate="CASCADE"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE", onupdate="CASCADE"), nullable=False)
    comment_text = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    event = relationship("Event", back_populates="comments")
    author = relationship("User", back_populates="comments")


class Like(Base):
    __tablename__ = "likes"
    __table_args__ = (
        UniqueConstraint("event_id", "user_id", name="uq_likes_event_user"),
        Index("idx_likes_event", "event_id"),
    )

    id = Column(Integer, primary_key=True)
    event_id = Column(Integer, ForeignKey("events.id", ondelete="CASCADE", onupdate="CASCADE"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE", onupdate="CASCADE"), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    event = relationship("Event", back_populates="likes")
    user = relationship("User", back_populates="likes")


class EventParticipant(Base):
    __tablename__ = "event_participants"
    __table_args__ = (UniqueConstraint("event_id", "user_id", name="uq_event_participants"),)

    id = Column(Integer, primary_key=True)
    event_id = Column(Integer, ForeignKey("events.id", ondelete="CASCADE", onupdate="CASCADE"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE", onupdate="CASCADE"), nullable=False)
    joined_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    event = relationship("Event", back_populates="participants")
    user = relationship("User")


class Complaint(Base):
    __tablename__ = "complaints"
    __table_args__ = (
        CheckConstraint("status in ('pending','resolved','rejected')", name="chk_complaints_status"),
    )

    id = Column(Integer, primary_key=True)
    target_type = Column(String(16), nullable=False)
    target_id = Column(Integer, nullable=False)
    reported_by = Column(Integer, ForeignKey("users.id", ondelete="CASCADE", onupdate="CASCADE"), nullable=False)
    reason = Column(Text, nullable=False)
    status = Column(String(16), default="pending", nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    resolved_at: Optional[datetime] = Column(DateTime)
    resolved_by = Column(Integer, ForeignKey("users.id", ondelete="SET NULL", onupdate="CASCADE"))

    reporter = relationship("User", foreign_keys=[reported_by])
    resolver = relationship("User", foreign_keys=[resolved_by])


class AuditLog(Base):
    __tablename__ = "audit_log"
    __table_args__ = (
        Index("idx_audit_log_table", "table_name"),
        Index("idx_audit_log_changed_at", "changed_at"),
    )

    id = Column(Integer, primary_key=True)
    table_name = Column(String(64), nullable=False)
    record_id = Column(Integer, nullable=False)
    action = Column(String(8), nullable=False)
    old_values = Column(JSON)
    new_values = Column(JSON)
    changed_by = Column(Integer, ForeignKey("users.id", ondelete="SET NULL", onupdate="CASCADE"))
    changed_at = Column(DateTime, default=datetime.utcnow, nullable=False)


class ImportErrorLog(Base):
    __tablename__ = "import_errors"

    id = Column(Integer, primary_key=True)
    source = Column(String(64), nullable=False)
    row_data = Column(JSON, nullable=False)
    error_message = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
