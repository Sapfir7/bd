from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

from .database import Base, engine
from .models import *  # noqa: F401,F403
from .routers import analytics, batch_import, complaints, events, users, categories

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Event Tracker API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.middleware("http")
async def telegram_header_middleware(request: Request, call_next):
    telegram_id = request.headers.get("X-Telegram-User-ID")
    request.state.telegram_user_id = telegram_id
    response = await call_next(request)
    return response

app.include_router(users.router, prefix="/api")
app.include_router(events.router, prefix="/api")
app.include_router(complaints.router, prefix="/api")
app.include_router(analytics.router, prefix="/api")
app.include_router(batch_import.router, prefix="/api")
app.include_router(categories.router, prefix="/api")


@app.get("/health")
def healthcheck():
    return {"status": "ok"}
