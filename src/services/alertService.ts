import { mockAlerts } from "../data/mockAlerts";
import type { MobilitySnapshot } from "../types/mobility.types";

export function getActiveAlerts(snapshots: MobilitySnapshot[]) {
  const generated = snapshots
    .filter((item) => item.riskScore > 78)
    .slice(0, 2)
    .map((item, index) => ({
      id: `generated-${item.locationId}`,
      title: "Predicted congestion spike",
      locationId: item.locationId,
      severity: index === 0 ? "critical" : "high",
      message: `Risk score ${item.riskScore}/100. Deploy diversion and shuttle support.`,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }) as const);
  return [...generated, ...mockAlerts];
}
