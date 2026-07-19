from collections import defaultdict

from app.services.cache_service import load_cache


def build_dashboard_data():
    data = load_cache()

    records = data["records"]

    stations = {}
    summary = defaultdict(list)

    latest_update = None

    for record in records:
        station = record["station"]

        if station not in stations:
            stations[station] = {
                "station": station,
                "latitude": float(record["latitude"]),
                "longitude": float(record["longitude"]),
                "last_update": record["last_update"],
                "pollutants": {}
            }

        pollutant = record["pollutant_id"]
        value = float(record["avg_value"])

        stations[station]["pollutants"][pollutant] = value

        summary[pollutant].append(value)

        latest_update = record["last_update"]

    summary_avg = {}

    for pollutant, values in summary.items():
        summary_avg[pollutant] = round(sum(values) / len(values), 2)

    return {
        "city": "Delhi",
        "last_updated": latest_update,
        "total_stations": len(stations),
        "summary": summary_avg,
        "stations": list(stations.values())
    }