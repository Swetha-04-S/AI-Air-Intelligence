import requests

from app.config import OGD_API_KEY

BASE_URL = "https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69"


def fetch_pollutant(pollutant):
    params = {
        "api-key": OGD_API_KEY,
        "format": "json",
        "limit": 1,
        "filters[state]": "Delhi",
        "filters[pollutant_id]": pollutant,
    }

    print("Pollutant:", pollutant)
    print("Parameters:", params)

    response = requests.get(
        BASE_URL,
        params=params,
        timeout=30,
    )

    print("Final URL:", response.url)

    response.raise_for_status()

    data = response.json()

    return data.get("records", [])