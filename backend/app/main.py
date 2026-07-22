from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.aqi import router as aqi_router
from app.api.forecast_router import router as forecast_router
from app.api.history_router import router as history_router


app = FastAPI(
    title="AI Air Intelligence Platform",
    description="Backend API for the AI Air Intelligence Platform",
    version="0.1.0",
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API Routes
app.include_router(aqi_router)
app.include_router(
    forecast_router,
    prefix="/api",
    tags=["Forecast"],
)
app.include_router(
    history_router,
    prefix="/api",
    tags=["History"],
)



@app.get("/")
def root():
    return {
        "project": "AI Air Intelligence Platform",
        "status": "Backend Running",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }