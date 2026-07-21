from app.services.dashboard_service import build_dashboard_data
from app.services.history_service import save_snapshot

print("=" * 60)
print("Building Historical Dataset")
print("=" * 60)

dashboard = build_dashboard_data()

save_snapshot(
    dashboard["stations"]
)

print()

print("History Updated Successfully!")

print()

print(f"Stations Saved : {len(dashboard['stations'])}")