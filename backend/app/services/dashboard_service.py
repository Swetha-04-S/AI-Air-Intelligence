from collections import defaultdict

from app.services.cache_service import load_cache
from app.services.station_builder import build_stations
from app.services.aqi_calculator import calculate_station_aqi


def build_dashboard_data():

    data = load_cache()

    records = data["records"]

    # Build 44 station objects
    stations = build_stations(records)

    # Calculate AQI for every station
    stations = [
        calculate_station_aqi(station)
        for station in stations
    ]

    summary = defaultdict(list)

    latest_update = None

    for record in records:

        value = record["avg_value"]

        if value == "NA":
            continue

        pollutant = record["pollutant_id"]

        summary[pollutant].append(float(value))

        latest_update = record["last_update"]

    summary_avg = {}

    for pollutant, values in summary.items():

        summary_avg[pollutant] = round(
            sum(values) / len(values),
            2
        )

    return {

        "city": "Delhi",

        "last_updated": latest_update,

        "total_stations": len(stations),

        "summary": summary_avg,

        "stations": stations,

    }