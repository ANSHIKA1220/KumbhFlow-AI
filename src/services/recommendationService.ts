import type { ParkingRecommendation } from "../types/parking.types";
import type { RankedRoute } from "../types/route.types";

export function summarizeRecommendations(bestRoute?: RankedRoute, bestParking?: ParkingRecommendation) {
  return [
    bestRoute ? `Promote ${bestRoute.name} as safest pilgrim route.` : "Run route planner to generate pilgrim guidance.",
    bestParking ? `Redirect vehicles toward ${bestParking.name}; predicted full in ${bestParking.predictedFullInMin} minutes.` : "Parking allocation pending.",
    "Keep synthetic simulator visible: it explains how live CCTV, GPS, parking, and rail APIs can plug in later."
  ];
}
