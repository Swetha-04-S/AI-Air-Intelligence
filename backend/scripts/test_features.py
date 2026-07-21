from app.ml.feature_engineering import load_training_data

X, y = load_training_data()

print("=" * 60)
print("Feature Engineering")
print("=" * 60)

print()

print("Features Shape :", X.shape)
print("Target Shape   :", y.shape)

print()

print(X.head())