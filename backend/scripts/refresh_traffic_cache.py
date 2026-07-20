from app.services.cache_service import load_cache
from app.services.traffic_service import fetch_traffic
from app.services.traffic_cache import save_traffic_cache

print("=" * 60)
print("Refreshing Delhi Traffic Cache...")
print("=" * 60)

# Load AQI cache (contains 44 stations)
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

traffic_data = []

total = len(stations)

print(f"\nFound {total} stations.\n")

for index, station in enumerate(stations.values(), start=1):

    print(f"[{index}/{total}] {station['station']}")

    try:

        traffic = fetch_traffic(
            station["latitude"],
            station["longitude"],
        )

        traffic_data.append({

            "station": station["station"],

            "latitude": station["latitude"],

            "longitude": station["longitude"],

            **traffic

        })

    except Exception as e:

        print("   Failed:", e)

cache = {

    "last_updated": records[0]["last_update"],

    "total_stations": len(traffic_data),

    "traffic": traffic_data,

}

save_traffic_cache(cache)

print("\n" + "=" * 60)
print("Traffic Cache Updated Successfully!")
print("=" * 60)

print(f"\nSaved {len(traffic_data)} stations.")