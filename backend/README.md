# AI Air Intelligence Platform — Backend

FastAPI backend scaffold for the AI Air Intelligence Platform.

## Prerequisites

- Python 3.11

## Setup

### 1. Create a virtual environment

**Windows (PowerShell)**

```powershell
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
```

**macOS / Linux**

```bash
cd backend
python3.11 -m venv venv
source venv/bin/activate
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Configure environment variables

Copy the example env file and fill in values when needed:

```bash
cp .env.example .env
```

On Windows (PowerShell):

```powershell
Copy-Item .env.example .env
```

## Run FastAPI

From the `backend` directory with the virtual environment activated:

```bash
uvicorn app.main:app --reload
```

The API will be available at:

- Root: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
- Health: [http://127.0.0.1:8000/health](http://127.0.0.1:8000/health)
- Interactive docs: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
