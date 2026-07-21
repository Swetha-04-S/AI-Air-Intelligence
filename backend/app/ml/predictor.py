from pathlib import Path

import joblib
import pandas as pd

from app.services.dashboard_service import build_dashboard_data

MODEL_PATH = Path("app/models/aqi_model.pkl")

model = joblib.load(MODEL_PATH)


def predict_next_day():

    dashboard = build_dashboard_data()

    forecasts = []

    for station in dashboard["stations"]:

        traffic = station.get("traffic") or {}
        weather = station.get("weather") or {}

        # ------------------------------------
        # Simulate Tomorrow's Conditions
        # ------------------------------------

        congestion = max(
            0,
            min(
                100,
                traffic.get("congestion", 30) + 5
            )
        )

        temperature = weather.get("temperature", 30) + 1

        humidity = weather.get("humidity", 60) - 3

        wind_speed = max(
            0.5,
            weather.get("wind_speed", 3) - 0.3
        )

        features = pd.DataFrame([{

            "pm25": station["pollutants"].get("PM2.5", 0),

            "pm10": station["pollutants"].get("PM10", 0),

            "no2": station["pollutants"].get("NO2", 0),

            "so2": station["pollutants"].get("SO2", 0),

            "co": station["pollutants"].get("CO", 0),

            "ozone": station["pollutants"].get("OZONE", 0),

            "congestion": congestion,

            "speed": traffic.get("speed", 30),

            "temperature": temperature,

            "humidity": humidity,

            "wind_speed": wind_speed,

            "hour": 12,

            "day_of_week": (pd.Timestamp.now().dayofweek + 1) % 7,

            "month": pd.Timestamp.now().month,

            "is_weekend": int(
                ((pd.Timestamp.now().dayofweek + 1) % 7) >= 5
            ),

        }])

        predicted = float(model.predict(features)[0])

        # ------------------------------------
        # Smooth Forecast
        # ------------------------------------

        current = station["aqi"]

        MAX_CHANGE = 40

        difference = predicted - current

        if difference > MAX_CHANGE:
            difference = MAX_CHANGE

        elif difference < -MAX_CHANGE:
            difference = -MAX_CHANGE

        forecast_24 = round(current + difference)

        forecast_48 = round(
            forecast_24 + difference * 0.5
        )

        forecast_72 = round(
            forecast_48 + difference * 0.3
        )

        forecast_24 = max(0, min(500, forecast_24))
        forecast_48 = max(0, min(500, forecast_48))
        forecast_72 = max(0, min(500, forecast_72))

        # ------------------------------------
        # Trend
        # ------------------------------------

        if difference > 10:
            trend = "Increasing"

        elif difference < -10:
            trend = "Decreasing"

        else:
            trend = "Stable"

        # ------------------------------------
        # Confidence
        # ------------------------------------

        confidence = max(
            70,
            min(
                95,
                int(95 - abs(difference) * 0.4)
            )
        )

        # ------------------------------------
        # Dominant Factor
        # ------------------------------------

        if station.get("source_attribution"):

            dominant_factor = station[
                "source_attribution"
            ][0]["source"]

        else:

            dominant_factor = "Unknown"

        # ------------------------------------
        # Recommendation
        # ------------------------------------

        if forecast_24 <= 50:

            recommendation = (
                "Air quality is good. Outdoor activities are safe."
            )

        elif forecast_24 <= 100:

            recommendation = (
                "Air quality is satisfactory for most people."
            )

        elif forecast_24 <= 200:

            recommendation = (
                "Sensitive groups should reduce prolonged outdoor exposure."
            )

        elif forecast_24 <= 300:

            recommendation = (
                "Limit prolonged outdoor activities and wear a mask if needed."
            )

        elif forecast_24 <= 400:

            recommendation = (
                "Avoid strenuous outdoor activities. Wear an N95 mask outdoors."
            )

        else:

            recommendation = (
                "Severe pollution expected. Stay indoors whenever possible."
            )

        forecasts.append({

            "station": station["station"],

            "current_aqi": current,

            "forecast_24h": forecast_24,

            "forecast_48h": forecast_48,

            "forecast_72h": forecast_72,

            "trend": trend,

            "confidence": confidence,

            "dominant_factor": dominant_factor,

            "recommendation": recommendation,

        })

    return forecasts