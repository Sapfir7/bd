import csv
import json
from io import StringIO
from typing import Optional

from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from sqlalchemy.orm import Session

from ..database import get_session
from ..models import Event, ImportErrorLog
from ..schemas.events import EventCreate

router = APIRouter(prefix="/batch-import", tags=["batch"])


def _get_db():
    with get_session() as session:
        yield session


def _parse_payload(file: UploadFile, fmt: str):
    data = file.file.read().decode("utf-8")
    if fmt == "csv":
        reader = csv.DictReader(StringIO(data))
        return list(reader)
    return json.loads(data)


@router.post("/events")
def import_events(
    file: UploadFile = File(...),
    format: str = "json",
    batch_size: int = 100,
    skip_errors: bool = True,
    db: Session = Depends(_get_db),
):
    rows = _parse_payload(file, format)
    created = 0
    errors = 0
    for row in rows:
        try:
            payload = EventCreate(**{**row, "created_by": int(row.get("created_by", 1))})
            event = Event(**payload.dict())
            db.add(event)
            created += 1
            if created % batch_size == 0:
                db.commit()
        except Exception as exc:  # noqa: BLE001
            errors += 1
            db.add(ImportErrorLog(source=file.filename, row_data=row, error_message=str(exc)))
            if not skip_errors:
                db.rollback()
                raise HTTPException(status_code=400, detail=f"Import stopped: {exc}") from exc
    db.commit()
    return {"created": created, "errors": errors}
