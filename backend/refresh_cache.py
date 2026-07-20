import os
import json
import requests
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("OGD_API_KEY")

BASE_URL = "https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69"

CACHE_FILE = Path("app") / "data" / "delhi_aqi.json"

params = {
    "api-key": API_KEY,
    "format": "json",
    "filters[state]": "Delhi",
    "limit": 500,
}

headers = {
    "Accept": "application/json",
    "User-Agent": "AI-Air-Intelligence/1.0",
}

print("=" * 60)
print("Fetching Delhi AQI Data...")
print("=" * 60)

try:

    response = requests.get(
        BASE_URL,
        params=params,
        headers=headers,
        timeout=60,
    )

    print("\nStatus Code:", response.status_code)
    print("Request URL:\n")
    print(response.url)

    response.raise_for_status()

    data = response.json()

    records = data.get("records", [])

    stations = {
        record["station"]
        for record in records
    }

    print("\n================================")
    print("SUCCESS")
    print("================================")

    print("Total Records :", len(records))
    print("Stations      :", len(stations))

    print("\nStations Found:\n")

    for station in sorted(stations):
        print("•", station)

    # Save latest data into our cache
    with open(CACHE_FILE, "w", encoding="utf-8") as file:
        json.dump(data, file, indent=2)

    print("\n✅ Cache updated successfully!")
    print(f"Saved to: {CACHE_FILE}")

except requests.exceptions.Timeout:
    print("\n❌ Request Timed Out")

except requests.exceptions.HTTPError as e:
    print("\n❌ HTTP Error")
    print(e)

except Exception as e:
    print("\n❌ Unexpected Error")
    print(e)