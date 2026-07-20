import os
import requests
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("TOMTOM_API_KEY")

url = (
    f"https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json"
)

params = {
    "key": API_KEY,
    "point": "28.6139,77.2090",   # Connaught Place, Delhi
}

print("=" * 60)
print("Testing TomTom Traffic API")
print("=" * 60)

response = requests.get(url, params=params, timeout=30)

print("\nStatus Code:", response.status_code)

response.raise_for_status()

data = response.json()

flow = data["flowSegmentData"]

print("\nCurrent Speed      :", flow["currentSpeed"], "km/h")
print("Free Flow Speed    :", flow["freeFlowSpeed"], "km/h")
print("Current Travel Time:", flow["currentTravelTime"], "sec")
print("Free Flow Time     :", flow["freeFlowTravelTime"], "sec")
print("Confidence         :", flow["confidence"])
print("Road Closed        :", flow["roadClosure"])