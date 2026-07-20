import json
from pathlib import Path

from app.services.cpcb_service import fetch_all_delhi

CACHE_FILE = (
    Path(__file__).resolve().parent.parent
    / "app"
    / "data"
    / "delhi_aqi.json"
)


def main():
    print("===================================")
    print("Refreshing Delhi AQI Cache...")
    print("===================================\n")

    try:
        data = fetch_all_delhi()

        with open(CACHE_FILE, "w", encoding="utf-8") as file:
            json.dump(data, file, indent=2)

        records = data.get("records", [])

        stations = {
            record["station"]
            for record in records
        }

        print("Cache refreshed successfully!\n")

        print(f"Records : {len(records)}")
        print(f"Stations: {len(stations)}")

        print("\nSaved to:")
        print(CACHE_FILE)

    except Exception as e:
        print("\nFailed to refresh cache.")
        print(e)


if __name__ == "__main__":
    main()