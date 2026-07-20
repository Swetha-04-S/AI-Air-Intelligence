from app.constants.aqi_breakpoints import (
    PM25_BREAKPOINTS,
    PM10_BREAKPOINTS,
    NO2_BREAKPOINTS,
    SO2_BREAKPOINTS,
    CO_BREAKPOINTS,
    OZONE_BREAKPOINTS,
)

# Mapping between pollutant names and breakpoint tables
BREAKPOINT_MAP = {
    "PM2.5": PM25_BREAKPOINTS,
    "PM10": PM10_BREAKPOINTS,
    "NO2": NO2_BREAKPOINTS,
    "SO2": SO2_BREAKPOINTS,
    "CO": CO_BREAKPOINTS,
    "OZONE": OZONE_BREAKPOINTS,
}


def calculate_subindex(concentration, breakpoints):
    """
    Calculate AQI sub-index using CPCB linear interpolation.
    """
    for bp_low, bp_high, aqi_low, aqi_high in breakpoints:

        if bp_low <= concentration <= bp_high:

            return round(
                ((aqi_high - aqi_low) / (bp_high - bp_low))
                * (concentration - bp_low)
                + aqi_low
            )

    return None


def get_aqi_category(aqi):
    if aqi <= 50:
        return "Good"

    elif aqi <= 100:
        return "Satisfactory"

    elif aqi <= 200:
        return "Moderate"

    elif aqi <= 300:
        return "Poor"

    elif aqi <= 400:
        return "Very Poor"

    return "Severe"


def calculate_station_aqi(station):
    """
    Calculate AQI for one monitoring station.
    """

    pollutant_indices = {}

    for pollutant, value in station["pollutants"].items():

        if pollutant not in BREAKPOINT_MAP:
            continue

        subindex = calculate_subindex(
            value,
            BREAKPOINT_MAP[pollutant],
        )

        if subindex is not None:
            pollutant_indices[pollutant] = subindex

    if not pollutant_indices:

        station["aqi"] = None
        station["category"] = "Unknown"
        station["dominant_pollutant"] = None

        return station

    dominant = max(
        pollutant_indices,
        key=pollutant_indices.get,
    )

    station["aqi"] = pollutant_indices[dominant]
    station["category"] = get_aqi_category(station["aqi"])
    station["dominant_pollutant"] = dominant

    return station