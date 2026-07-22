from sqlalchemy import Column
from sqlalchemy import DateTime
from sqlalchemy import Float
from sqlalchemy import Integer
from sqlalchemy import String

from datetime import datetime

from app.database.database import Base


class AQIHistory(Base):

    __tablename__ = "aqi_history"

    id = Column(Integer, primary_key=True)

    station = Column(String)

    aqi = Column(Float)

    pm25 = Column(Float)

    pm10 = Column(Float)

    no2 = Column(Float)

    so2 = Column(Float)

    co = Column(Float)

    ozone = Column(Float)

    temperature = Column(Float)

    humidity = Column(Float)

    wind_speed = Column(Float)

    congestion = Column(Float)

    timestamp = Column(DateTime, default=datetime.utcnow)