import type { ScenarioConfig } from "../types/mobility.types";

export const mockScenarios: ScenarioConfig[] = [
  { id: "normal", name: "Normal Day", description: "Steady inflow with regular shuttle cycles.", crowdMultiplier: 0.72, vehicleMultiplier: 0.7, parkingMultiplier: 0.72, surge: 28 },
  { id: "peak-snan", name: "Peak Snan Day", description: "High ghat pull and dense pedestrian movement.", crowdMultiplier: 1.22, vehicleMultiplier: 1.05, parkingMultiplier: 1.02, surge: 86 },
  { id: "train-surge", name: "Train Arrival Surge", description: "Sudden railway arrivals from Prayagraj Junction.", crowdMultiplier: 1.08, vehicleMultiplier: 0.94, parkingMultiplier: 0.88, surge: 74 },
  { id: "rain", name: "Rain Disruption", description: "Slower roads, higher shuttle demand, delayed walking.", crowdMultiplier: 0.94, vehicleMultiplier: 1.22, parkingMultiplier: 1.12, surge: 62 },
  { id: "emergency", name: "Emergency Incident", description: "Corridor reservation and diversion-heavy operations.", crowdMultiplier: 1.02, vehicleMultiplier: 1.14, parkingMultiplier: 1.08, surge: 92 }
];
