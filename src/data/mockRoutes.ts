import type { RouteOption } from "../types/route.types";

export const mockRoutes: RouteOption[] = [
  {
    id: "r1",
    name: "Civil Lines - Parade - Sangam",
    startId: "civil-lines",
    destinationId: "sangam",
    distanceKm: 6.4,
    baseMinutes: 42,
    accessibilityScore: 72,
    roadIds: ["civil-lines", "parade-ground", "hanuman-mandir", "sangam"]
  },
  {
    id: "r2",
    name: "Junction - Sector 4 - Sangam",
    startId: "junction",
    destinationId: "sangam",
    distanceKm: 5.7,
    baseMinutes: 38,
    accessibilityScore: 64,
    roadIds: ["junction", "sector-4-parking", "hanuman-mandir", "sangam"]
  },
  {
    id: "r3",
    name: "Naini Bridge - Arail - Sangam Shuttle",
    startId: "naini-bridge",
    destinationId: "sangam",
    distanceKm: 7.2,
    baseMinutes: 48,
    accessibilityScore: 86,
    roadIds: ["naini-bridge", "arail", "sangam"]
  },
  {
    id: "r4",
    name: "Jhusi Holding - Outer Loop - Sangam",
    startId: "jhusi",
    destinationId: "sangam",
    distanceKm: 8.1,
    baseMinutes: 56,
    accessibilityScore: 78,
    roadIds: ["jhusi", "parade-ground", "sangam"]
  }
];
