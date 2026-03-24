# Trends in Application Project

## Overview
A Python Flask web application that displays emerging technology trends with a clean dark UI.

## Tech Stack
- **Language**: Python 3.11
- **Framework**: Flask
- **Frontend**: Plain HTML, CSS, JavaScript (no build step)
- **Server**: Flask dev server (port 5000)

## Project Structure
```
app.py              # Flask application entry point
templates/
  index.html        # Main HTML page
static/
  css/style.css     # Stylesheet
  js/main.js        # Frontend JS (fetches and renders trend data)
requirements.txt    # Python dependencies
```

## Running the App
The app runs via the "Start application" workflow which executes:
```
python app.py
```
It listens on `0.0.0.0:5000`.

## API Endpoints
- `GET /` — Main page
- `GET /api/trends` — Returns JSON list of technology trends with growth indices
