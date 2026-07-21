from app.ml.predictor import predict_next_day

print("=" * 60)
print("AI AQI Forecast")
print("=" * 60)

forecast = predict_next_day()

print()

for item in forecast[:5]:
    print(item)