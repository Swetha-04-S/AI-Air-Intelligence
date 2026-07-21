from app.services.cache_service import load_cache
from app.services.weather_service import fetch_weather
from app.services.weather_cache import save_weather_cache

print("=" * 60)
print("Refreshing Delhi Weather Cache...")
print("=" * 60)

# Load AQI cache (contains all monitoring stations)
aqi_data = load_cache()

records = aqi_data["records"]

stations = {}

# Extract unique stations
for record in records:

    station = record["station"]

    if station not in stations:

        stations[station] = {
            "station": station,
            "latitude": float(record["latitude"]),
            "longitude": float(record["longitude"]),
        }

weather_data = []

total = len(stations)

print(f"\nFound {total} stations.\n")

for index, station in enumerate(stations.values(), start=1):

    print(f"[{index}/{total}] {station['station']}")

    try:

        weather = fetch_weather(
            station["latitude"],
            station["longitude"],
        )

        weather_data.append({

            "station": station["station"],

            "latitude": station["latitude"],

            "longitude": station["longitude"],

            **weather

        })

    except Exception as e:

        print("   Failed:", e)

cache = {

    "last_updated": records[0]["last_update"],

    "total_stations": len(weather_data),

    "weather": weather_data,

}

save_weather_cache(cache)

print("\n" + "=" * 60)
print("Weather Cache Updated Successfully!")
print("=" * 60)

print(f"\nSaved {len(weather_data)} stations.")