import type { GroupType, RouteOption, TravelMode } from "../../../types/route.types";
import type { MobilitySnapshot } from "../../../types/mobility.types";

export function scoreRoute(route: RouteOption, snapshots: MobilitySnapshot[], groupType: GroupType, mode: TravelMode) {
  const relevant = snapshots.filter((snapshot) => route.roadIds.includes(snapshot.locationId));
  const avgRisk = relevant.length ? relevant.reduce((sum, item) => sum + item.riskScore, 0) / relevant.length : 45;
  const groupPenalty = groupType === "large-group" ? 18 : groupType === "elderly" || groupType === "disabled" ? 14 : groupType === "family" ? 7 : 0;
  const accessPenalty = groupType === "disabled" ? Math.max(0, 90 - route.accessibilityScore) : Math.max(0, 72 - route.accessibilityScore) / 2;
  const modePenalty = mode === "walk" ? route.distanceKm * 2 : mode === "shuttle" ? avgRisk / 8 : route.distanceKm;
  const blockagePenalty = route.blocked ? 100 : 0;
  const score = route.distanceKm * 7 + avgRisk * 1.4 + groupPenalty + accessPenalty + modePenalty + blockagePenalty;
  return { score, avgRisk, accessPenalty };
}
