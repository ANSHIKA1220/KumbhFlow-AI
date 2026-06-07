import { mockRoutes } from "../../../data/mockRoutes";
import type { MobilitySnapshot } from "../../../types/mobility.types";
import type { GroupType, RankedRoute, TravelMode } from "../../../types/route.types";
import { calculateRiskScore } from "../../../utils/calculateRiskScore";
import { scoreRoute } from "./routeScoring";

export function optimizeRoutes(input: {
  startId: string;
  destinationId: string;
  groupType: GroupType;
  mode: TravelMode;
  snapshots: MobilitySnapshot[];
}): RankedRoute[] {
  const candidateRoutes = mockRoutes.filter((route) => route.startId === input.startId || route.destinationId === input.destinationId);

  return candidateRoutes
    .map((route) => {
      const scored = scoreRoute(route, input.snapshots, input.groupType, input.mode);
      const risk = calculateRiskScore({ crowdDensity: scored.avgRisk, vehicleDensity: scored.avgRisk * 0.8, parkingPressure: 44, eventSurge: 55 });
      const estimatedMinutes = Math.round(route.baseMinutes + scored.avgRisk / 5 + scored.accessPenalty / 2);
      return {
        ...route,
        estimatedMinutes,
        riskScore: risk.score,
        riskLevel: risk.level,
        score: Math.round(scored.score),
        reason:
          route.distanceKm < 6 && risk.score > 70
            ? "Shortest route is not preferred because predicted crowd risk is high."
            : "Balanced route selected for lower predicted density, accessibility, and shuttle feasibility."
      };
    })
    .sort((a, b) => a.score - b.score);
}
