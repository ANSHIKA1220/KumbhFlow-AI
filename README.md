# KumbhFlow AI
### Predictive Mobility & Crowd Intelligence System for Mahakumbh

From reactive traffic monitoring to predictive mobility intelligence.

## Overview

KumbhFlow AI is an AI-assisted smart mobility command center designed for large-scale events like Mahakumbh. It helps authorities forecast congestion, understand crowd movement, recommend safer routes, manage parking overflow, generate emergency corridors, and guide pilgrims.

The current prototype uses synthetic and simulated data because official live Mahakumbh operational datasets are not publicly available. The system is designed so real CCTV, GPS, parking, railway, weather, and control-room APIs can replace the synthetic feeds later.

## What Makes KumbhFlow AI Different?

Most mobility dashboards only show what is happening now.

KumbhFlow AI predicts what may happen next, simulates intervention strategies, explains decisions, and recommends actions before congestion becomes unsafe.

It combines:

- Predictive mobility intelligence
- Synthetic digital twin simulation
- AI command decision engine
- What-if simulator
- Emergency corridor generation
- Multilingual pilgrim assistant

## Problem Statement

Mahakumbh involves large-scale movement of pilgrims through roads, railways, buses, parking zones, pedestrian routes, and ghats.

Challenges:

- Congestion is often detected after it forms.
- Parking lots can overflow unexpectedly.
- Railway arrivals can create sudden crowd surges.
- Emergency access can become blocked.
- Pilgrims need simple, multilingual guidance.
- Authorities need fast, explainable decisions.

## Solution

KumbhFlow AI provides:

- AI Mobility Command Dashboard
- Synthetic Digital Twin Simulator
- Predictive Risk Forecasting
- Safe Route Recommendation
- Predictive Parking Allocation
- Emergency Corridor Generator
- Multilingual Mobility Copilot
- Lost Person Recovery Predictor

## Key Features

### AI Mobility Command Center

- Mobility health/risk summary
- AI command decision engine
- 30/60/120 minute forecast
- Predictive risk map
- AI recommended actions
- Incident probability panel

### Synthetic Digital Twin Simulator

- Simulates crowd density
- Simulates parking occupancy
- Simulates rail arrival surges
- Simulates shuttle demand
- Simulates emergency disruption
- Supports Peak Snan, Train Surge, Rain Disruption, and Emergency scenarios

### What-if Simulator

- Test command decisions before applying them
- Add extra shuttles
- Open extra parking
- Close routes
- Trigger rain disruption
- Trigger emergency corridor
- Compare before/after impact

### Smart Route Planner

- Recommends safest route, not shortest route
- Scores routes using crowd density, distance, accessibility, forecast risk, and blockage probability
- Explains why a route was selected

### Predictive Parking Allocation

- Forecasts parking occupancy
- Predicts overflow probability
- Recommends diversion parking
- Considers shuttle frequency and exit congestion

### Emergency Corridor Generator

- Generates medical, fire, and security corridors
- Suggests roads to clear
- Suggests roads to block
- Provides crowd diversion plan
- Suggests police deployment and ambulance staging

### Multilingual Mobility Copilot

- Supports English, Hindi, and Hinglish prompts
- Answers route, parking, shuttle, crowd safety, and emergency queries

### Lost Person Recovery Predictor

- Uses last-seen location
- Predicts likely movement path
- Shows confidence score

## Screenshots

### Dashboard

![Dashboard](docs/images/dashboard.png)

## AI & Prediction Logic

The current prototype uses deterministic AI-inspired logic and rule-based simulation to demonstrate how the system would behave with live data. It does not claim to use a trained machine learning model in the current frontend-only version.

Core concepts:

- Risk score based on crowd density, vehicle density, parking pressure, and event surge
- Route safety score based on distance, accessibility, predicted congestion, and blockage risk
- Parking overflow probability based on current occupancy, predicted arrival pressure, and shuttle availability
- Incident probability for stampede risk, parking overflow, route blockage, and medical response delay
- What-if impact comparison for command decisions
- AI confidence score for recommendations and emergency planning

Risk formula:

```txt
riskScore =
crowdDensity * 0.4 +
vehicleDensity * 0.25 +
parkingPressure * 0.2 +
eventSurge * 0.15
```

## Synthetic Data Strategy

Official Mahakumbh operational datasets are not publicly available for this prototype.

To solve this, KumbhFlow AI uses a Synthetic Digital Twin that generates realistic mobility streams for:

- Crowd density
- Vehicle density
- Parking occupancy
- Rail arrival surges
- Shuttle demand
- Route risk
- Emergency events

The system is designed with a pluggable data layer so synthetic feeds can later be replaced by:

- CCTV crowd-counting systems
- GPS bus/shuttle feeds
- Parking sensors
- Railway arrival APIs
- Weather APIs
- Police control-room inputs

Synthetic data and simulation logic are included in:

```txt
src/data/
src/features/simulation/logic/
src/services/
```

## Architecture

```txt
Synthetic Mobility Generator
        |
        v
Scenario Engine
        |
        v
Digital Twin State
        |
        v
Prediction Services
        |
        v
AI Decision Engine
        |
        v
Dashboard / Route Planner / Parking / Emergency / Assistant
```

Key folders:

- `src/data` - mock Mahakumbh/Prayagraj data
- `src/services` - prediction, explainability, what-if, incident, and timeline services
- `src/features` - dashboard, simulation, routing, parking, emergency, and assistant modules
- `src/components` - reusable UI, AI, map, chart, and layout components
- `src/store` - Zustand state stores
- `src/hooks` - shared feature hooks

## Tech Stack

Frontend:

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Leaflet / React Leaflet
- Recharts

State/Logic:

- Zustand
- Synthetic scenario engine
- Prediction services
- Route scoring engine
- Parking allocator
- Emergency corridor planner

Deployment:

- Vercel
- Netlify compatible

## Project Structure

```txt
src/
  app/
  components/
  components/ai/
  components/maps/
  components/charts/
  features/
    dashboard/
    simulation/
    routing/
    parking/
    emergency/
    assistant/
  data/
  services/
  hooks/
  store/
  types/
  utils/
```

## Demo Scenarios

- **Normal Day** - steady crowd and transport flow with manageable risk.
- **Peak Snan Day** - high pilgrim density near ghats and increased mobility pressure.
- **Train Arrival Surge** - sudden railway arrivals create crowd spikes near Prayagraj Junction.
- **Rain Disruption** - slower walking and vehicle movement increase congestion risk.
- **Emergency Incident** - prioritizes corridor planning, diversion, and resource deployment.
- **Demo Mode** - quickly activates high-impact visuals and judge-friendly AI recommendations.

## Run Locally

```bash
git clone https://github.com/ANSHIKA1220/KumbhFlow-AI.git
cd KumbhFlow-AI
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

The production output is generated in:

```txt
dist/
```

## Deployment

## Deployed to Vercel: https://kumbh-flow-ai.vercel.app/

## AI-Assisted Development Workflow

This project was built using AI-assisted development tools such as Codex/ChatGPT for:

- Architecture planning
- Component generation
- UI iteration
- Synthetic data logic
- Prediction service design
- Documentation
- Deployment preparation

Final implementation decisions were validated and integrated manually.

## Future Scope

- Real CCTV integration
- GPS-based shuttle tracking
- Railway API integration
- Weather-aware forecasting
- Real parking sensor integration
- LLM-powered assistant
- Reinforcement learning route optimization
- Admin authentication
- Real-time WebSocket data ingestion
- Mobile-first pilgrim app

## Hackathon Pitch

KumbhFlow AI does not optimize for the shortest path. It optimizes for the safest crowd movement before congestion happens.

It demonstrates how authorities can move from reactive traffic monitoring to predictive mobility intelligence using a synthetic digital twin, explainable AI decisions, and emergency-ready command tools.

## Team

Built for: Mahakumbh Innovation Hackathon 2028 x Expert Hire x VIT Bhopal

Track: Transportation & Mobility Management

Project: KumbhFlow AI

Owner: Anshika Shrivastava
