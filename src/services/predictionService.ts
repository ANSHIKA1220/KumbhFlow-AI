import type { MobilitySnapshot, PredictionPoint, ScenarioType } from "../types/mobility.types";

const scenarioGrowth: Record<ScenarioType, number> = {
  normal: 1.04,
  "peak-snan": 1.18,
  "train-surge": 1.22,
  rain: 1.14,
  emergency: 1.09
};

export function predictCongestion(snapshots: MobilitySnapshot[], scenario: ScenarioType): PredictionPoint[] {
  const avg = snapshots.reduce(
    (acc, item) => ({
      riskScore: acc.riskScore + item.riskScore,
      crowdDensity: acc.crowdDensity + item.crowdDensity,
      vehicleDensity: acc.vehicleDensity + item.vehicleDensity
    }),
    { riskScore: 0, crowdDensity: 0, vehicleDensity: 0 }
  );
  const count = Math.max(1, snapshots.length);
  const base = {
    riskScore: avg.riskScore / count,
    crowdDensity: avg.crowdDensity / count,
    vehicleDensity: avg.vehicleDensity / count
  };

  return [
    { label: "now", ...base },
    { label: "15m", riskScore: base.riskScore * scenarioGrowth[scenario], crowdDensity: base.crowdDensity * 1.08, vehicleDensity: base.vehicleDensity * 1.05 },
    { label: "30m", riskScore: base.riskScore * scenarioGrowth[scenario] * 1.1, crowdDensity: base.crowdDensity * 1.16, vehicleDensity: base.vehicleDensity * 1.1 },
    { label: "60m", riskScore: base.riskScore * scenarioGrowth[scenario] * 1.2, crowdDensity: base.crowdDensity * 1.25, vehicleDensity: base.vehicleDensity * 1.16 },
    { label: "120m", riskScore: base.riskScore * scenarioGrowth[scenario] * 1.35, crowdDensity: base.crowdDensity * 1.42, vehicleDensity: base.vehicleDensity * 1.26 }
  ].map((point) => ({
    label: point.label,
    riskScore: Math.min(100, Math.round(point.riskScore)),
    crowdDensity: Math.min(100, Math.round(point.crowdDensity)),
    vehicleDensity: Math.min(100, Math.round(point.vehicleDensity))
  })) as PredictionPoint[];
}
