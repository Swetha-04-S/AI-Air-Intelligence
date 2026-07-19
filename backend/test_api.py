import requests

API_KEY = os.getenv("OGD_API_KEY")

url = "https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69"

params = {
    "api-key": API_KEY,
    "format": "json",
    "limit": 5,
    "filters[state]": "Delhi",
}

headers = {
    "Accept": "application/json",
    "User-Agent": "AI-Air-Intelligence/1.0",
}

print("Sending request...")

response = requests.get(
    url,
    params=params,
    headers=headers,
    timeout=30,
)

print("Status:", response.status_code)
print(response.text[:1000])