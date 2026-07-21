from fastapi import APIRouter

from app.ml.predictor import predict_next_day

router = APIRouter()


@router.get("/forecast")
def get_forecast():

    return {
        "forecasts": predict_next_day()
    }