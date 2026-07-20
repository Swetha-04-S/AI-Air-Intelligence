from app.services.cache_service import load_cache
from app.services.station_builder import build_stations
from app.services.aqi_calculator import calculate_station_aqi

data = load_cache()

stations = build_stations(data["records"])

stations = [
    calculate_station_aqi(station)
    for station in stations
]

print("=" * 60)
print("Delhi AQI Calculator")
print("=" * 60)

print()

print(stations[0])