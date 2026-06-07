import type { RiskLevel } from "./mobility.types";

export type Alert = {
  id: string;
  title: string;
  locationId: string;
  severity: RiskLevel;
  message: string;
  timestamp: string;
};
