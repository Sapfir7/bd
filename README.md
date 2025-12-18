# Coursework Event Tracker

Сервис для отслеживания и организации мероприятий на карте (Telegram Mini App backend). Репозиторий содержит полную структуру базы данных PostgreSQL, backend на FastAPI и Docker-конфигурацию для запуска локально.

## Структура проекта
```
coursework-event-tracker/
├── backend/                     # FastAPI backend
│   ├── app/
│   │   ├── main.py             # Точка входа
│   │   ├── database.py         # Подключение к БД через SQLAlchemy
│   │   ├── models/             # Описание таблиц ORM
│   │   ├── schemas/            # Pydantic-схемы
│   │   ├── routers/            # API эндпоинты
│   │   └── services/           # Вспомогательные сервисы (например, Haversine)
│   ├── migrations/             # Папка под Alembic миграции
│   ├── requirements.txt        # Зависимости backend
│   └── Dockerfile              # Образ backend
├── database/
│   ├── schema.sql              # DDL всех таблиц и индексов
│   ├── triggers.sql            # Триггеры аудита и агрегатов
│   ├── functions.sql           # Скалярные и табличные функции
│   ├── views.sql               # Представления
│   └── seed_data.py            # Генератор тестовых данных Faker
├── frontend/                   # Telegram Mini App (Leaflet карта)
├── telegram-bot/               # Aiogram 3.x бот
├── docker-compose.yml          # Компоновка сервисов (db, backend, pgadmin, bot, frontend)
└── README.md
```

## Требования
- Docker и docker-compose
- Python 3.11+ (если запускать без контейнеров)
- Переменная окружения `DATABASE_URL` должна указывать на PostgreSQL (без явной записи секретов в коде). Для локального docker-compose она задаётся автоматически.

## Шаги запуска
1. Скопировать пример переменных окружения:
   ```bash
   cp .env.example .env
   # пропишите BOT_TOKEN, при необходимости MINI_APP_URL
   ```
2. Собрать и запустить контейнеры:
   ```bash
   docker-compose up --build
   ```
3. Применить DDL/функции/триггеры/представления:
   ```bash
   docker-compose exec db psql -U postgres -d event_tracker -f /docker-entrypoint-initdb.d/schema.sql
   docker-compose exec db psql -U postgres -d event_tracker -f /docker-entrypoint-initdb.d/functions.sql
   docker-compose exec db psql -U postgres -d event_tracker -f /docker-entrypoint-initdb.d/triggers.sql
   docker-compose exec db psql -U postgres -d event_tracker -f /docker-entrypoint-initdb.d/views.sql
   ```
   (или примонтируйте файлы в initdb.d при необходимости).
4. Сгенерировать тестовые данные (опционально):
   ```bash
   docker-compose exec backend python -m app.database  # создание таблиц из моделей
   docker-compose exec backend python /app/../database/seed_data.py
   ```
5. Открыть Swagger UI: http://localhost:8000/docs
6. Открыть Mini App в браузере/Telegram WebView: http://localhost:8080

## Основные эндпоинты
- `POST /api/users` — регистрация пользователя
- `PUT /api/users/{id}/profile` — обновление профиля
- `POST /api/events` / `GET /api/events` / `PUT /api/events/{id}` / `DELETE /api/events/{id}` — CRUD событий
- `POST /api/events/{id}/like` — поставить/убрать лайк
- `POST /api/events/{id}/comments` / `GET /api/events/{id}/comments` — комментарии
- `POST /api/events/{id}/join` — отметить участие
- `GET /api/events/nearby` — геопоиск через функцию `get_events_in_radius`
- `GET /api/categories` — список категорий для формы создания
- `GET /api/users/me` — профиль текущего пользователя по заголовку `X-Telegram-User-ID`
- `POST /api/complaints` / `PUT /api/complaints/{id}/resolve` — модерация жалоб
- `GET /api/analytics/top-events` / `GET /api/analytics/user-stats/{user_id}` — аналитика
- `POST /api/batch-import/events` — массовый импорт из CSV/JSON с логированием ошибок

## Работа с БД
- Таблицы: 11 сущностей + лог ошибок импорта, связь 1:1 (users ↔ user_profiles), 1:N (users → events), N:M (users ↔ events через event_participants).
- Ограничения: PK/FK (ON DELETE/UPDATE CASCADE где уместно), UNIQUE, CHECK, NOT NULL.
- Функции: `calculate_user_reputation`, `get_events_in_radius`, `get_top_events_by_period`.
- Триггеры: аудит изменений событий, автоматическое обновление likes_count и participants_count.
- Представления: `top_events_view`, `user_activity_stats`, `pending_complaints_view`.
- Индексы: координаты, категория, статус, внешние ключи, AuditLog (table_name, changed_at).
- Для демонстрации оптимизации запустите `EXPLAIN ANALYZE` до/после создания индексов (пример в `schema.sql`).

## Batch-import и логирование ошибок
Эндпоинт `/api/batch-import/events` принимает JSON или CSV, создаёт события батчами и пишет ошибки в таблицу `import_errors`. Настройки `batch_size` и `skip_errors` позволяют управлять остановкой при ошибках.

## Безопасность
- Пароли и секреты не хранятся в коде; используйте переменные окружения/`.env`.
- В SQLAlchemy используются параметризованные запросы по умолчанию; избегаем конкатенации SQL.

## Telegram Bot и Mini App
- Бот (aiogram 3.x) автоматически регистрирует пользователя по `telegram_id`, сохраняет геолокацию в `user_profiles.last_latitude/last_longitude` и отдаёт кнопку для открытия Mini App.
- Mini App (Leaflet) подставляет `X-Telegram-User-ID` в запросы; backend middleware раскладывает `telegram_id` в `request.state.telegram_user_id`, а зависимости `get_current_user_id`/`/api/users/me` возвращают текущего пользователя.
- Сервисы в docker-compose: `telegram-bot` (порт не публикуется) и `frontend` (nginx на `http://localhost:8080`).
