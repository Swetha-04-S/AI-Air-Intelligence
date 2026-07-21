from collections import defaultdict

from app.services.cache_service import load_cache
from app.services.traffic_cache import load_traffic_cache
from app.services.weather_cache import load_weather_cache
from app.services.station_builder import build_stations
from app.services.aqi_calculator import calculate_station_aqi
from app.services.source_attribution import analyze_source


def build_dashboard_data():

    # Load cached data
    data = load_cache()
    traffic_data = load_traffic_cache()
    weather_data = load_weather_cache()

    records = data["records"]

    # Build monitoring stations
    stations = build_stations(records)

    # Calculate AQI for each station
    stations = [
        calculate_station_aqi(station)
        for station in stations
    ]

    # -----------------------------
    # Create lookup dictionaries
    # -----------------------------
    traffic_lookup = {
        item["station"]: item
        for item in traffic_data["traffic"]
    }

    weather_lookup = {
        item["station"]: item
        for item in weather_data["weather"]
    }

    # -----------------------------
    # Merge Traffic + Weather + AI
    # -----------------------------
    for station in stations:

        # ---------- Traffic ----------
        traffic = traffic_lookup.get(station["station"])

        if traffic:

            station["traffic"] = {

                "speed": traffic["speed"],

                "free_flow_speed": traffic["free_flow_speed"],

                "travel_time": traffic["travel_time"],

                "congestion": traffic["congestion"],

                "traffic_level": traffic["traffic_level"],

                "road_closed": traffic["road_closed"],

                "confidence": traffic["confidence"],

            }

        else:

            station["traffic"] = None

        # ---------- Weather ----------
        weather = weather_lookup.get(station["station"])

        if weather:

            station["weather"] = {

                "temperature": weather["temperature"],

                "feels_like": weather["feels_like"],

                "humidity": weather["humidity"],

                "pressure": weather["pressure"],

                "wind_speed": weather["wind_speed"],

                "wind_direction": weather["wind_direction"],

                "visibility": weather["visibility"],

                "clouds": weather["clouds"],

                "condition": weather["condition"],

            }

        else:

            station["weather"] = None

        # ---------- AI Source Attribution ----------
        station["source_attribution"] = analyze_source(station)

    # -----------------------------
    # Build Pollutant Summary
    # -----------------------------
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

    # -----------------------------
    # Final Dashboard Response
    # -----------------------------
    return {

        "city": "Delhi",

        "last_updated": latest_update,

        "total_stations": len(stations),

        "summary": summary_avg,

        "stations": stations,

    }