import json
from pathlib import Path

CACHE_FILE = Path(__file__).parent.parent / "data" / "delhi_traffic.json"


def load_traffic_cache():

    with open(CACHE_FILE, "r", encoding="utf-8") as file:
        return json.load(file)


def save_traffic_cache(data):

    with open(CACHE_FILE, "w", encoding="utf-8") as file:
        json.dump(data, file, indent=2)