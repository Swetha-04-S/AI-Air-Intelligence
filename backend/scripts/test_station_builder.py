from app.services.cache_service import load_cache
from app.services.station_builder import build_stations

data = load_cache()

stations = build_stations(data["records"])

print("=" * 60)
print("Delhi AQI Station Builder")
print("=" * 60)

print(f"Total Stations: {len(stations)}")

print("\nFirst Station:\n")

print(stations[0])