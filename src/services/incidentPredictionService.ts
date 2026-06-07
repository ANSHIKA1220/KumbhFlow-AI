import type { MobilitySnapshot } from "../types/mobility.types";

function avgRisk(snapshots: MobilitySnapshot[]) {
  return snapshots.reduce((sum, item) => sum + item.riskScore, 0) / Math.max(1, snapshots.length);
}

export function predictStampedeRisk(snapshots: MobilitySnapshot[]) {
  const risk = Math.min(94, Math.round(avgRisk(snapshots) * 0.82));
  return { label: "Stampede risk probability", percentage: risk, level: risk > 70 ? "high" : risk > 40 ? "medium" : "low", factors: ["Ghat density", "Pedestrian merge points", "Rail surge"] };
}

export function predictParkingOverflow(snapshots: MobilitySnapshot[]) {
  const pressure = snapshots.reduce((sum, item) => sum + item.parkingPressure, 0) / Math.max(1, snapshots.length);
  const risk = Math.min(96, Math.round(pressure * 0.9));
  return { label: "Parking overflow probability", percentage: risk, level: risk > 70 ? "high" : risk > 40 ? "medium" : "low", factors: ["Parking pressure", "Vehicle arrival rate", "Shuttle frequency"] };
}

export function predictRouteBlockage(snapshots: MobilitySnapshot[]) {
  const risk = Math.min(90, Math.round(avgRisk(snapshots) * 0.74));
  return { label: "Route blockage probability", percentage: risk, level: risk > 70 ? "high" : risk > 40 ? "medium" : "low", factors: ["Road density", "Incident alerts", "Bridge load"] };
}

export function predictMedicalDelay(snapshots: MobilitySnapshot[]) {
  const maxRisk = Math.max(...snapshots.map((item) => item.riskScore));
  const risk = Math.min(92, Math.round(maxRisk * 0.7));
  return { label: "Medical response delay probability", percentage: risk, level: risk > 70 ? "high" : risk > 40 ? "medium" : "low", factors: ["Corridor clearance", "Crowd density", "Ambulance staging"] };
}
