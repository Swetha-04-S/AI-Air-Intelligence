from app.services.weather_service import fetch_weather

print("=" * 60)
print("Weather Service Test")
print("=" * 60)

weather = fetch_weather(
    28.6139,
    77.2090,
)

for key, value in weather.items():
    print(f"{key:20}: {value}")