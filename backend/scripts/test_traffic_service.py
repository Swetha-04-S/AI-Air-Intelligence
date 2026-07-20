from app.services.traffic_service import fetch_traffic

print("=" * 60)
print("Delhi Traffic Service Test")
print("=" * 60)

# Connaught Place, Delhi
traffic = fetch_traffic(
    28.6139,
    77.2090,
)

print("\nTraffic Data\n")

for key, value in traffic.items():
    print(f"{key:20}: {value}")