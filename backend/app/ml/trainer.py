from pathlib import Path

import joblib
from sklearn.metrics import mean_absolute_error, r2_score
from sklearn.model_selection import train_test_split
from xgboost import XGBRegressor

from app.ml.feature_engineering import load_training_data


def train_model():

    print("=" * 60)
    print("Training XGBoost AQI Model")
    print("=" * 60)

    X, y = load_training_data()

    X_train, X_test, y_train, y_test = train_test_split(
        X,
        y,
        test_size=0.2,
        random_state=42,
    )

    model = XGBRegressor(
        n_estimators=200,
        max_depth=6,
        learning_rate=0.05,
        objective="reg:squarederror",
        random_state=42,
    )

    model.fit(X_train, y_train)

    predictions = model.predict(X_test)

    mae = mean_absolute_error(y_test, predictions)
    r2 = r2_score(y_test, predictions)

    model_path = Path("app/models")
    model_path.mkdir(parents=True, exist_ok=True)

    joblib.dump(
        model,
        model_path / "aqi_model.pkl"
    )

    print()
    print("Model Trained Successfully!")
    print()

    print(f"MAE Score : {mae:.2f}")
    print(f"R² Score  : {r2:.4f}")

    print()
    print("Model Saved:")
    print("app/models/aqi_model.pkl")