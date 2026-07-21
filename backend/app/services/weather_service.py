import requests

from app.config import OPENWEATHER_API_KEY

BASE_URL = "https://api.openweathermap.org/data/2.5/weather"


def fetch_weather(latitude, longitude):

    params = {
        "lat": latitude,
        "lon": longitude,
        "appid": OPENWEATHER_API_KEY,
        "units": "metric",
    }

    response = requests.get(
        BASE_URL,
        params=params,
        timeout=30,
    )

    response.raise_for_status()

    data = response.json()

    return {

        "temperature": data["main"]["temp"],

        "feels_like": data["main"]["feels_like"],

        "humidity": data["main"]["humidity"],

        "pressure": data["main"]["pressure"],

        "wind_speed": data["wind"]["speed"],

        "wind_direction": data["wind"]["deg"],

        "visibility": data.get("visibility", 0),

        "clouds": data["clouds"]["all"],

        "condition": data["weather"][0]["main"],

    }