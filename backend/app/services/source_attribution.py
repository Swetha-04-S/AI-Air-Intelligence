def analyze_source(station):

    pollutants = station["pollutants"]

    traffic = station.get("traffic")

    weather = station.get("weather")

    causes = []

    # -------------------------------
    # Vehicular Emissions
    # -------------------------------
    if traffic:

        if (
            traffic["traffic_level"] in ["Heavy", "Severe"]
            and pollutants.get("NO2", 0) > 40
        ):

            causes.append({
                "source": "Vehicular Emissions",
                "confidence": 90,
            })

    # -------------------------------
    # Construction / Road Dust
    # -------------------------------
    if (
        pollutants.get("PM10", 0) > 150
        and weather
        and weather["wind_speed"] < 3
    ):

        causes.append({
            "source": "Construction & Road Dust",
            "confidence": 85,
        })

    # -------------------------------
    # Pollutant Accumulation
    # -------------------------------
    if (
        pollutants.get("PM2.5", 0) > 100
        and weather
        and weather["wind_speed"] < 2
    ):

        causes.append({
            "source": "Poor Atmospheric Dispersion",
            "confidence": 80,
        })

    # -------------------------------
    # Biomass Burning
    # -------------------------------
    if (
        pollutants.get("CO", 0) > 80
        and pollutants.get("PM2.5", 0) > 80
    ):

        causes.append({
            "source": "Biomass / Fuel Burning",
            "confidence": 75,
        })

    # -------------------------------
    # Ozone Formation
    # -------------------------------
    if (
        pollutants.get("OZONE", 0) > 80
        and weather
        and weather["temperature"] > 32
    ):

        causes.append({
            "source": "Photochemical Smog",
            "confidence": 70,
        })

    if not causes:

        causes.append({

            "source": "Mixed Urban Pollution",

            "confidence": 50,

        })

    return causes