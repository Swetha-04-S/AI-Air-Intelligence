from app.database.database import Base, engine
from app.database import models
from app.database.history_model import AQIHistory

print("=" * 50)
print("Creating PostgreSQL Tables...")
print("=" * 50)

Base.metadata.create_all(bind=engine)

print("✅ Tables Created Successfully!")