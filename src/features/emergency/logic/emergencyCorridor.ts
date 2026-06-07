import type { MobilitySnapshot } from "../../../types/mobility.types";

export type EmergencyType = "ambulance" | "fire" | "stampede" | "lost-person" | "security";

export function generateEmergencyCorridor(input: {
  type: EmergencyType;
  sourceId: string;
  destinationId: string;
  priority: "standard" | "high" | "critical";
  snapshots: MobilitySnapshot[];
}) {
  const avoid = input.snapshots.filter((item) => item.riskScore > 70).map((item) => item.locationId);
  const criticalBoost = input.priority === "critical" ? -4 : input.priority === "high" ? -2 : 0;
  return {
    corridorName: input.type === "ambulance" ? "Medical Green Corridor" : "Priority Response Corridor",
    route: [input.sourceId, "sector-4-parking", "hanuman-mandir", input.destinationId],
    roadsToClear: ["Sector 4 service lane", "Hanuman Mandir approach", "Sangam east access"],
    roadsToBlock: ["Civil Lines feeder", "Parade Ground merge", "Naini Bridge heavy vehicle lane"],
    diversionSuggestions: ["Hold incoming pilgrims at Parade Ground", "Redirect vehicles to Sector 7 Parking", "Pause shuttle boarding for 8 minutes"],
    policeDeploymentPoints: ["Sector 4 barricade", "Hanuman Mandir junction", "Sangam east gate"],
    ambulanceStagingPoint: "Sector 4 medical post",
    avoidZones: avoid,
    aiConfidence: input.priority === "critical" ? 91 : 84,
    estimatedResponseMin: Math.max(6, 18 + criticalBoost - avoid.length)
  };
}
