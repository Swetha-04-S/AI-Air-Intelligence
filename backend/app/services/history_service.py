from app.database.database import SessionLocal
from app.database.history_model import AQIHistory


def get_history():

    db = SessionLocal()

    history = (
        db.query(AQIHistory)
        .order_by(AQIHistory.timestamp.desc())
        .limit(500)
        .all()
    )

    result = []

    for row in history:

        result.append({
            "station": row.station,
            "aqi": row.aqi,
            "pm25": row.pm25,
            "pm10": row.pm10,
            "no2": row.no2,
            "so2": row.so2,
            "co": row.co,
            "ozone": row.ozone,
            "temperature": row.temperature,
            "humidity": row.humidity,
            "wind_speed": row.wind_speed,
            "congestion": row.congestion,
            "timestamp": row.timestamp,
        })

    db.close()

    return result