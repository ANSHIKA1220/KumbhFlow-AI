# KumbhFlow AI

**From reactive traffic monitoring to predictive mobility intelligence.**

KumbhFlow AI is a hackathon-ready **AI Mobility Command Center** for Transportation & Mobility Management at Mahakumbh. It creates a synthetic digital twin of Prayagraj mobility conditions, forecasts congestion before it happens, explains AI recommendations, and supports pilgrims, police, parking teams, shuttle operators, and emergency responders.

## Problem Statement

Mahakumbh involves massive movement across ghats, railways, roads, buses, parking zones, and pedestrian corridors. Official live datasets are not always available during prototyping, but mobility planning still needs intelligent forecasting, routing, parking allocation, and emergency decision support.

## Unique Solution

KumbhFlow AI does not optimize for the shortest path. It optimizes for the **safest crowd movement before congestion happens**.

The app uses a synthetic digital twin to simulate CCTV counts, GPS feeds, parking occupancy, rail arrivals, shuttle movement, weather disruption, emergency corridors, and crowd density. These streams power predictive dashboards and AI-style recommendations without requiring a real dataset.

## Winning Features

- AI Command Decision Engine with structured reasoning, expected impact, and confidence.
- Mobility Health Score as the single control-room KPI.
- Live Digital Twin Playback for Now, +15, +30, +60, and +120 minute forecasts.
- Crisis Mode for Train Surge + Rain + Parking Overflow high-alert demos.
- Predictive Risk Map using Leaflet risk circles.
- Crowd Flow Forecast with directional movement paths through Prayagraj.
- AI Recommended Actions ranked by impact and confidence.
- Incident Probability Panel for stampede risk, parking overflow, route blockage, and medical response delay.
- Resource Allocation AI for ambulances, police units, and shuttle buses.
- What-if Simulator with before/after impact visualization.
- Route A/B/C visual comparison with AI Pick, confidence, and rejection reasons.
- Predictive parking overflow and suggested diversion.
- Emergency corridor generation with map route, roads to clear/block, police deployment, ambulance staging, timeline, ETA, and confidence.
- Multilingual Mobility Copilot for English, Hindi, and Hinglish guidance.
- Lost Person Recovery Predictor for likely movement path and confidence.
- Demo Mode for judges.

## Synthetic Data Included

This hackathon submission commits the synthetic data and simulator logic directly in the repository:

```txt
src/data/
src/features/simulation/logic/
src/services/
```

Important files:

- `src/data/mockLocations.ts`
- `src/data/mockRoutes.ts`
- `src/data/mockParkingLots.ts`
- `src/data/mockTransport.ts`
- `src/data/mockAlerts.ts`
- `src/data/mockScenarios.ts`
- `src/features/simulation/logic/syntheticDataGenerator.ts`
- `src/services/predictionService.ts`
- `src/services/timelinePredictionService.ts`
- `src/services/whatIfService.ts`
- `src/services/incidentPredictionService.ts`
- `src/services/aiExplanationService.ts`

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- React Router
- React Leaflet / Leaflet
- Recharts
- Zustand
- Deterministic frontend synthetic-data simulation

## Risk Formula

```txt
riskScore =
crowdDensity * 0.4 +
vehicleDensity * 0.25 +
parkingPressure * 0.2 +
eventSurge * 0.15
```

## Real-World Integrations

The synthetic simulator can later be replaced or enriched with:

- CCTV crowd feeds
- GPS bus tracking
- Parking sensors
- Railway arrival APIs
- Weather APIs
- Police control room feeds
- Drone surveillance
- OpenAI/Gemini-powered assistant

## How To Run

PowerShell may block `npm.ps1`, so use `npm.cmd`:

```powershell
cd "C:\Users\Lenovo\OneDrive\Desktop\PROLOG SAVES\Documents\KumbhMove"
npm.cmd install
npm.cmd run dev
```

Then open the Vite URL, usually:

```txt
http://127.0.0.1:5173
```

If port `5173` is busy, Vite may use another port such as `5174`.

## Production Build

```powershell
npm.cmd run build
npm.cmd run preview
```

The production output is generated in:

```txt
dist/
```

## Deploy To Vercel

1. Push this repository to GitHub.
2. Open Vercel and choose **Import Project**.
3. Select the GitHub repository.
4. Framework preset: **Vite**.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Deploy.

SPA routing is handled by `vercel.json`, so direct refreshes such as `/simulation`, `/parking`, `/emergency`, and `/assistant` route back to `index.html`.

## Deploy To Netlify

1. Push this repository to GitHub.
2. Open Netlify and choose **Import from Git**.
3. Select the GitHub repository.
4. Build command: `npm run build`.
5. Publish directory: `dist`.
6. Deploy.

SPA routing is handled by `public/_redirects`:

```txt
/* /index.html 200
```

## Environment Variables

Copy `.env.example` to `.env.local` for local overrides:

```txt
VITE_APP_NAME=KumbhFlow AI
VITE_DEMO_MODE=true
VITE_DATA_SOURCE=synthetic
```

All variables are optional. The app safely falls back to synthetic demo defaults.

## Demo Script

1. Open Dashboard and point to Mobility Health Score, Crisis Mode, and AI Command Decision Engine.
2. Press **Play Simulation** to show Digital Twin Playback and Crowd Flow Forecast.
3. Toggle **Crisis Mode** to show Alert Level 4 and emergency recommendations.
4. Open Simulation and run **Add extra shuttles** to show before/after impact.
5. Open Route Planner and compare Route A/B/C with AI Pick and confidence.
6. Open Emergency and generate the ambulance corridor with map, timeline, and resource allocation.
7. Open Assistant and ask: `Mujhe Sangam jana hai`.

## AI-Assisted Development Workflow

The app was developed with AI-assisted architecture and iterative verification:

- Reusable AI components live in `src/components/ai`.
- Feature logic lives in `src/features/*/logic`.
- Prediction, explainability, what-if, incident, and timeline services live in `src/services`.
- Zustand stores manage simulator, mobility, and UI state.
- Pages stay focused on product workflows instead of raw calculations.

This makes the prototype feel like a smart-city command center while remaining easy to extend into production.
