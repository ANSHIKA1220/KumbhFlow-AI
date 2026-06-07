import { mockLocations } from "../../../data/mockLocations";
import type { MobilitySnapshot, ScenarioType } from "../../../types/mobility.types";
import { calculateRiskScore } from "../../../utils/calculateRiskScore";
import { getScenarioConfig } from "./scenarioEngine";

const baseByType = {
  ghat: { crowd: 78, vehicle: 34, parking: 44 },
  station: { crowd: 68, vehicle: 64, parking: 48 },
  parking: { crowd: 42, vehicle: 72, parking: 76 },
  road: { crowd: 52, vehicle: 66, parking: 44 },
  landmark: { crowd: 58, vehicle: 48, parking: 46 },
  bridge: { crowd: 44, vehicle: 78, parking: 38 }
};

export function generateSyntheticSnapshots(scenario: ScenarioType, tick: number): MobilitySnapshot[] {
  const config = getScenarioConfig(scenario);
  const wave = 1 + Math.sin(tick / 4) * 0.09;

  return mockLocations.map((location, index) => {
    const base = baseByType[location.type];
    const trainBoost = scenario === "train-surge" && location.id === "junction" ? 1.35 : 1;
    const ghatBoost = scenario === "peak-snan" && location.type === "ghat" ? 1.28 : 1;
    const emergencyRelief = scenario === "emergency" && location.id === "hanuman-mandir" ? 0.72 : 1;
    const crowdDensity = Math.min(100, Math.round(base.crowd * config.crowdMultiplier * wave * trainBoost * ghatBoost * emergencyRelief + index));
    const vehicleDensity = Math.min(100, Math.round(base.vehicle * config.vehicleMultiplier * (1 + Math.cos(tick / 5) * 0.05)));
    const parkingPressure = Math.min(100, Math.round(base.parking * config.parkingMultiplier));
    const risk = calculateRiskScore({ crowdDensity, vehicleDensity, parkingPressure, eventSurge: config.surge });

    return {
      locationId: location.id,
      crowdDensity,
      vehicleDensity,
      parkingPressure,
      eventSurge: config.surge,
      shuttleCount: Math.max(2, Math.round(22 - vehicleDensity / 8 + (location.type === "parking" ? 8 : 0))),
      riskScore: risk.score,
      riskLevel: risk.level,
      confidence: Math.max(76, 96 - Math.round(risk.score / 7)),
      predictedCrowd15: Math.min(100, Math.round(crowdDensity * 1.08)),
      predictedCrowd30: Math.min(100, Math.round(crowdDensity * 1.16)),
      predictedCrowd60: Math.min(100, Math.round(crowdDensity * 1.28)),
      predictedCrowd120: Math.min(100, Math.round(crowdDensity * 1.42)),
      incidentProbability: Math.min(96, Math.round(risk.score * 0.72)),
      overflowProbability: Math.min(94, Math.round(parkingPressure * 0.82)),
      accessibilityScore: location.type === "bridge" ? 62 : location.type === "ghat" ? 68 : 82,
      emergencyAccessScore: location.id === "hanuman-mandir" || location.id === "sector-4-parking" ? 88 : 70,
      shuttleFrequency: Math.max(4, Math.round(12 - vehicleDensity / 15)),
      exitCongestionRisk: Math.min(100, Math.round(vehicleDensity * 0.8 + parkingPressure * 0.4)),
      aiReason: risk.score > 70 ? "High predictive pressure from crowd and vehicle convergence." : "Within manageable operating range with standard monitoring.",
      updatedAt: new Date().toISOString()
    };
  });
}
