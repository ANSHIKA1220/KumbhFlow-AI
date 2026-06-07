import type { RiskLevel } from "../types/mobility.types";

export type RiskInput = {
  crowdDensity: number;
  vehicleDensity: number;
  parkingPressure: number;
  eventSurge: number;
};

export type RiskResult = {
  score: number;
  level: RiskLevel;
  label: string;
  recommendation: string;
};

export function calculateRiskScore(input: RiskInput): RiskResult {
  const score = Math.max(
    0,
    Math.min(
      100,
      Math.round(
        input.crowdDensity * 0.4 +
          input.vehicleDensity * 0.25 +
          input.parkingPressure * 0.2 +
          input.eventSurge * 0.15
      )
    )
  );

  if (score >= 86) {
    return {
      score,
      level: "critical",
      label: "Critical",
      recommendation: "Freeze inflow, open emergency corridors, and activate diversion teams."
    };
  }
  if (score >= 71) {
    return {
      score,
      level: "high",
      label: "High Risk",
      recommendation: "Reduce incoming load and route pilgrims through lower-density sectors."
    };
  }
  if (score >= 41) {
    return {
      score,
      level: "medium",
      label: "Moderate",
      recommendation: "Monitor closely and stage shuttles before density rises."
    };
  }
  return {
    score,
    level: "low",
    label: "Safe",
    recommendation: "Normal movement can continue with standard monitoring."
  };
}
