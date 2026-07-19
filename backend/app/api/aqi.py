from fastapi import APIRouter, HTTPException

from app.services.dashboard_service import build_dashboard_data

router = APIRouter(prefix="/api", tags=["AQI"])


@router.get("/dashboard")
def get_dashboard():
    try:
        return build_dashboard_data()

    except Exception as e:
        print("========== ERROR ==========")
        print(repr(e))
        print("===========================")

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )