from collections import defaultdict


def build_stations(records):
    """
    Convert flat API records into one object per station.
    """

    stations = {}

    for record in records:

        station_name = record["station"]

        if station_name not in stations:
            stations[station_name] = {
                "station": station_name,
                "latitude": float(record["latitude"]),
                "longitude": float(record["longitude"]),
                "last_update": record["last_update"],
                "pollutants": {}
            }

        pollutant = record["pollutant_id"]
        print("POLLUTANT:", pollutant)
        value = record["avg_value"]
        # Skip missing pollutant values
        if value == "NA":
            continue
        value = float(value)

        stations[station_name]["pollutants"][pollutant] = value

    return list(stations.values())