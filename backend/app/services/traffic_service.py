import requests

from app.config import TOMTOM_API_KEY

BASE_URL = (
    "https://api.tomtom.com/traffic/services/4/"
    "flowSegmentData/absolute/10/json"
)


def fetch_traffic(latitude, longitude):

    params = {
        "key": TOMTOM_API_KEY,
        "point": f"{latitude},{longitude}",
    }

    response = requests.get(
        BASE_URL,
        params=params,
        timeout=30,
    )

    response.raise_for_status()

    data = response.json()["flowSegmentData"]

    current_speed = data["currentSpeed"]
    free_flow_speed = data["freeFlowSpeed"]

    congestion = round(
        (1 - (current_speed / free_flow_speed)) * 100
    )

    if congestion < 20:
        level = "Low"

    elif congestion < 40:
        level = "Moderate"

    elif congestion < 70:
        level = "Heavy"

    else:
        level = "Severe"

    return {

        "speed": current_speed,

        "free_flow_speed": free_flow_speed,

        "travel_time": data["currentTravelTime"],

        "congestion": congestion,

        "traffic_level": level,

        "road_closed": data["roadClosure"],

        "confidence": data["confidence"],

    }