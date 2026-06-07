import type { RiskLevel } from "./mobility.types";

export type GroupType = "individual" | "family" | "elderly" | "disabled" | "large-group";
export type TravelMode = "walk" | "shuttle" | "mixed";

export type RouteOption = {
  id: string;
  name: string;
  startId: string;
  destinationId: string;
  distanceKm: number;
  baseMinutes: number;
  accessibilityScore: number;
  roadIds: string[];
  blocked?: boolean;
};

export type RankedRoute = RouteOption & {
  estimatedMinutes: number;
  riskScore: number;
  riskLevel: RiskLevel;
  score: number;
  reason: string;
};
