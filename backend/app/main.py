from fastapi import FastAPI

app = FastAPI(
    title="AI Air Intelligence Platform",
    description="Backend API for the AI Air Intelligence Platform",
    version="0.1.0",
)


@app.get("/")
def root():
    return {
        "project": "AI Air Intelligence Platform",
        "status": "Backend Running",
    }


@app.get("/health")
def health():
    return {"status": "healthy"}
