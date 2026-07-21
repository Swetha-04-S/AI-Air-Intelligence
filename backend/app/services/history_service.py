import json
from pathlib import Path
from datetime import datetime

HISTORY_FILE = Path(__file__).parent.parent / "data" / "history.json"


def save_snapshot(stations):

    with open(HISTORY_FILE, "r", encoding="utf-8") as file:
        history = json.load(file)

    timestamp = datetime.now().isoformat()

    for station in stations:

        history.append({

            "timestamp": timestamp,

            "station": station["station"],

            "aqi": station.get("aqi"),

            "category": station.get("category"),

            "dominant_pollutant": station.get("dominant_pollutant"),

            "pm25": station["pollutants"].get("PM2.5"),

            "pm10": station["pollutants"].get("PM10"),

            "no2": station["pollutants"].get("NO2"),

            "so2": station["pollutants"].get("SO2"),

            "co": station["pollutants"].get("CO"),

            "ozone": station["pollutants"].get("OZONE"),

            "traffic_level": (
                station["traffic"]["traffic_level"]
                if station["traffic"] else None
            ),

            "congestion": (
                station["traffic"]["congestion"]
                if station["traffic"] else None
            ),

            "speed": (
                station["traffic"]["speed"]
                if station["traffic"] else None
            ),

            "temperature": (
                station["weather"]["temperature"]
                if station["weather"] else None
            ),

            "humidity": (
                station["weather"]["humidity"]
                if station["weather"] else None
            ),

            "wind_speed": (
                station["weather"]["wind_speed"]
                if station["weather"] else None
            ),

        })

    with open(HISTORY_FILE, "w", encoding="utf-8") as file:
        json.dump(history, file, indent=2)