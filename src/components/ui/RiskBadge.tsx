import type { RiskLevel } from "../../types/mobility.types";
import { Badge } from "./Badge";

export function RiskBadge({ level }: { level: RiskLevel }) {
  const tone = level === "low" ? "green" : level === "medium" ? "amber" : "red";
  const label = level === "low" ? "Safe" : level === "medium" ? "Moderate" : level === "high" ? "High Risk" : "Critical";
  return <Badge tone={tone}>{label}</Badge>;
}
