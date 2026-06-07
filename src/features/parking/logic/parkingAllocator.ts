import { mockParkingLots } from "../../../data/mockParkingLots";
import type { MobilitySnapshot } from "../../../types/mobility.types";
import type { ParkingRecommendation } from "../../../types/parking.types";

export function allocateParking(destinationId: string, snapshots: MobilitySnapshot[]): ParkingRecommendation[] {
  return mockParkingLots
    .map((lot) => {
      const nearbyRisk = snapshots.find((snapshot) => snapshot.locationId === lot.locationId)?.riskScore ?? 45;
      const predictedFullInMin = Math.max(4, Math.round((100 - lot.occupancyPct) / Math.max(3, nearbyRisk / 16) * 8));
      const shuttleBonus = lot.shuttleAvailable ? -18 : 12;
      const score = lot.occupancyPct * 1.1 + lot.distanceToSangamKm * 8 + nearbyRisk * 0.7 + shuttleBonus;
      return {
        ...lot,
        predictedFullInMin,
        score: Math.round(score),
        reason:
          destinationId === "sangam"
            ? "Recommended by balancing occupancy, shuttle frequency, and risk near Sangam approach."
            : "Recommended by available capacity and lower congestion near the destination corridor."
      };
    })
    .sort((a, b) => a.score - b.score);
}
