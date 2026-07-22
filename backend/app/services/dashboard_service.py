from collections import defaultdict

from app.services.cache_service import load_cache
from app.services.traffic_cache import load_traffic_cache
from app.services.weather_cache import load_weather_cache
from app.services.station_builder import build_stations
from app.services.aqi_calculator import calculate_station_aqi
from app.services.source_attribution import analyze_source

from app.database.database import SessionLocal
from app.database.models import AQIData
from app.database.history_model import AQIHistory


def build_dashboard_data():

    # -----------------------------
    # Load Live Data
    # -----------------------------
    data = load_cache()
    traffic_data = load_traffic_cache()
    weather_data = load_weather_cache()

    records = data["records"]

    # -----------------------------
    # Build Monitoring Stations
    # -----------------------------
    stations = build_stations(records)

    stations = [
        calculate_station_aqi(station)
        for station in stations
    ]

    # -----------------------------
    # Traffic Lookup
    # -----------------------------
    traffic_lookup = {
        item["station"]: item
        for item in traffic_data["traffic"]
    }

    # -----------------------------
    # Weather Lookup
    # -----------------------------
    weather_lookup = {
        item["station"]: item
        for item in weather_data["weather"]
    }

    db = SessionLocal()

    # -----------------------------
    # Merge Weather + Traffic + Save
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
        # Save Current Snapshot
        # -----------------------------
        existing = db.query(AQIData).filter(
            AQIData.station == station["station"]
        ).first()

        if existing:

            existing.aqi = station["aqi"]
            existing.pm25 = station["pollutants"].get("PM2.5")
            existing.pm10 = station["pollutants"].get("PM10")
            existing.no2 = station["pollutants"].get("NO2")
            existing.so2 = station["pollutants"].get("SO2")
            existing.co = station["pollutants"].get("CO")
            existing.ozone = station["pollutants"].get("OZONE")

            if station["weather"]:
                existing.temperature = station["weather"]["temperature"]
                existing.humidity = station["weather"]["humidity"]
                existing.wind_speed = station["weather"]["wind_speed"]

            if station["traffic"]:
                existing.congestion = station["traffic"]["congestion"]

        else:

            new_record = AQIData(
                station=station["station"],
                aqi=station["aqi"],
                pm25=station["pollutants"].get("PM2.5"),
                pm10=station["pollutants"].get("PM10"),
                no2=station["pollutants"].get("NO2"),
                so2=station["pollutants"].get("SO2"),
                co=station["pollutants"].get("CO"),
                ozone=station["pollutants"].get("OZONE"),
                temperature=station["weather"]["temperature"] if station["weather"] else None,
                humidity=station["weather"]["humidity"] if station["weather"] else None,
                wind_speed=station["weather"]["wind_speed"] if station["weather"] else None,
                congestion=station["traffic"]["congestion"] if station["traffic"] else None,
            )

            db.add(new_record)

        # ==================================================
        # ALWAYS SAVE HISTORY
        # ==================================================

        history = AQIHistory(
            station=station["station"],
            aqi=station["aqi"],
            pm25=station["pollutants"].get("PM2.5"),
            pm10=station["pollutants"].get("PM10"),
            no2=station["pollutants"].get("NO2"),
            so2=station["pollutants"].get("SO2"),
            co=station["pollutants"].get("CO"),
            ozone=station["pollutants"].get("OZONE"),
            temperature=station["weather"]["temperature"] if station["weather"] else None,
            humidity=station["weather"]["humidity"] if station["weather"] else None,
            wind_speed=station["weather"]["wind_speed"] if station["weather"] else None,
            congestion=station["traffic"]["congestion"] if station["traffic"] else None,
        )

        db.add(history)

    db.commit()
    db.close()

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
    # Final Response
    # -----------------------------
    return {
        "city": "Delhi",
        "last_updated": latest_update,
        "total_stations": len(stations),
        "summary": summary_avg,
        "stations": stations,
    }