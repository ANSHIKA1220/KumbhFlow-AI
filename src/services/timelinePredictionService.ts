import type { MobilitySnapshot } from "../types/mobility.types";
import type { ParkingRecommendation } from "../types/parking.types";

const offsetFactor: Record<number, number> = { 0: 1, 15: 1.08, 30: 1.16, 60: 1.28, 120: 1.42 };

export function predictAtTimeOffset(snapshots: MobilitySnapshot[], offsetMinutes: number) {
  return adjustLocationRisks(snapshots, offsetMinutes);
}

export function adjustLocationRisks(snapshots: MobilitySnapshot[], offsetMinutes: number): MobilitySnapshot[] {
  const factor = offsetFactor[offsetMinutes] ?? 1;
  return snapshots.map((snapshot) => ({
    ...snapshot,
    crowdDensity: Math.min(100, Math.round(snapshot.crowdDensity * factor)),
    vehicleDensity: Math.min(100, Math.round(snapshot.vehicleDensity * (1 + (factor - 1) * 0.55))),
    riskScore: Math.min(100, Math.round(snapshot.riskScore * factor)),
    riskLevel: snapshot.riskScore * factor > 86 ? "critical" : snapshot.riskScore * factor > 70 ? "high" : snapshot.riskScore * factor > 40 ? "medium" : "low"
  }));
}

export function adjustParkingForecast(lots: ParkingRecommendation[], offsetMinutes: number) {
  return lots.map((lot) => ({
    ...lot,
    occupancyPct: Math.min(100, Math.round(lot.occupancyPct + offsetMinutes / 4)),
    predictedFullInMin: Math.max(0, lot.predictedFullInMin - offsetMinutes)
  }));
}

export function adjustCrowdForecast(value: number, offsetMinutes: number) {
  return Math.min(100, Math.round(value * (offsetFactor[offsetMinutes] ?? 1)));
}
