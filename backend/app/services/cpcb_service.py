import requests

from app.config import OGD_API_KEY

BASE_URL = "https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69"


def fetch_all_delhi():
    params = {
        "api-key": OGD_API_KEY,
        "format": "json",
        "limit": 500,
        "filters[state]": "Delhi",
    }

    response = requests.get(
        BASE_URL,
        params=params,
        timeout=30,
    )

    response.raise_for_status()

    data = response.json()

    return data