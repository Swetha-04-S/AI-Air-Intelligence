import os
from dotenv import load_dotenv

load_dotenv()

OGD_API_KEY = os.getenv("OGD_API_KEY", "")
TOMTOM_API_KEY = os.getenv("TOMTOM_API_KEY")

OPENWEATHER_API_KEY = os.getenv("OPENWEATHER_API_KEY", "")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")

HOST = os.getenv("HOST", "127.0.0.1")
PORT = int(os.getenv("PORT", 8000))

DEFAULT_CITY = os.getenv("DEFAULT_CITY", "Delhi")
