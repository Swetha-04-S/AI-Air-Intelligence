import random
from datetime import datetime, timedelta

import pandas as pd

from app.services.dashboard_service import build_dashboard_data


def generate_training_dataset(days=30):
    """
    Generate synthetic historical training data
    based on current live AQI, traffic and weather.
    """

    dashboard = build_dashboard_data()

    rows = []

    now = datetime.now()

    for station in dashboard["stations"]:

        base_pm25 = station["pollutants"].get("PM2.5", 50)
        base_pm10 = station["pollutants"].get("PM10", 80)
        base_no2 = station["pollutants"].get("NO2", 25)
        base_so2 = station["pollutants"].get("SO2", 10)
        base_co = station["pollutants"].get("CO", 40)
        base_ozone = station["pollutants"].get("OZONE", 25)

        traffic = station.get("traffic") or {}
        weather = station.get("weather") or {}

        base_congestion = traffic.get("congestion", 30)
        base_speed = traffic.get("speed", 30)

        base_temp = weather.get("temperature", 30)
        base_humidity = weather.get("humidity", 60)
        base_wind = weather.get("wind_speed", 3)

        for day in range(days):

            for hour in range(24):

                timestamp = now - timedelta(
                    days=day,
                    hours=(23 - hour)
                )

                # --------------------------
                # Traffic Pattern
                # --------------------------
                congestion = base_congestion

                if 7 <= hour <= 10:
                    congestion += random.randint(20, 35)

                elif 17 <= hour <= 20:
                    congestion += random.randint(15, 30)

                else:
                    congestion += random.randint(-10, 10)

                congestion = max(0, min(100, congestion))

                speed = max(
                    5,
                    base_speed - congestion * 0.15
                )

                # --------------------------
                # Weather
                # --------------------------
                temperature = (
                    base_temp
                    + random.uniform(-3, 3)
                )

                humidity = (
                    base_humidity
                    + random.uniform(-10, 10)
                )

                wind = max(
                    0.5,
                    base_wind
                    + random.uniform(-1.5, 1.5)
                )

                # --------------------------
                # Pollutants
                # --------------------------
                pm25 = (
                    base_pm25
                    + congestion * 0.25
                    - wind * 3
                    + random.uniform(-8, 8)
                )

                pm10 = (
                    base_pm10
                    + congestion * 0.20
                    - wind * 2
                    + random.uniform(-10, 10)
                )

                no2 = (
                    base_no2
                    + congestion * 0.18
                    + random.uniform(-4, 4)
                )

                co = (
                    base_co
                    + congestion * 0.12
                    + random.uniform(-3, 3)
                )

                so2 = (
                    base_so2
                    + random.uniform(-2, 2)
                )

                ozone = (
                    base_ozone
                    + (temperature - 25) * 1.4
                    + random.uniform(-4, 4)
                )

                # --------------------------
                # Approximate AQI Target
                # --------------------------
                aqi = max(
                    pm25,
                    pm10,
                    no2 * 2,
                    co * 3,
                    ozone * 1.5
                )

                rows.append({

                    "timestamp": timestamp,

                    "station": station["station"],

                    "hour": hour,

                    "pm25": round(pm25, 2),

                    "pm10": round(pm10, 2),

                    "no2": round(no2, 2),

                    "so2": round(so2, 2),

                    "co": round(co, 2),

                    "ozone": round(ozone, 2),

                    "congestion": round(congestion, 2),

                    "speed": round(speed, 2),

                    "temperature": round(temperature, 2),

                    "humidity": round(humidity, 2),

                    "wind_speed": round(wind, 2),

                    "aqi": round(aqi, 2),

                })

    df = pd.DataFrame(rows)

    output = "app/data/training_dataset.csv"

    df.to_csv(output, index=False)

    print("=" * 60)
    print("Training Dataset Generated")
    print("=" * 60)
    print(f"Rows : {len(df)}")
    print(f"Saved: {output}")