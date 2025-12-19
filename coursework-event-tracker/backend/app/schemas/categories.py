from pydantic import BaseModel


class CategoryOut(BaseModel):
    id: int
    category_name: str
    description: str | None = None

    class Config:
        orm_mode = True
