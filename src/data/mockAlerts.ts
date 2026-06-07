import type { Alert } from "../types/alert.types";

export const mockAlerts: Alert[] = [
  { id: "a1", title: "Rail surge detected", locationId: "junction", severity: "high", message: "Two trains arrived within 12 minutes. Route pilgrims to Sector 4.", timestamp: "09:12" },
  { id: "a2", title: "Parking pressure rising", locationId: "parade-ground", severity: "medium", message: "Parade Ground Holding will fill soon. Promote Jhusi Reserve.", timestamp: "09:18" },
  { id: "a3", title: "Ghat density watch", locationId: "sangam", severity: "medium", message: "Sangam approach density increasing after ritual window.", timestamp: "09:22" }
];
