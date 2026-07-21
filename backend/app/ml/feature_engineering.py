import pandas as pd


FEATURE_COLUMNS = [
    "pm25",
    "pm10",
    "no2",
    "so2",
    "co",
    "ozone",
    "congestion",
    "speed",
    "temperature",
    "humidity",
    "wind_speed",
    "hour",
]


def load_training_data():

    df = pd.read_csv("app/data/training_dataset.csv")

    # Convert timestamp
    df["timestamp"] = pd.to_datetime(df["timestamp"])

    # Extra features
    df["day_of_week"] = df["timestamp"].dt.dayofweek
    df["month"] = df["timestamp"].dt.month
    df["is_weekend"] = (df["day_of_week"] >= 5).astype(int)

    features = FEATURE_COLUMNS + [
        "day_of_week",
        "month",
        "is_weekend",
    ]

    X = df[features]

    y = df["aqi"]

    return X, y