import type { ParkingLot } from "../types/parking.types";

export const mockParkingLots: ParkingLot[] = [
  { id: "p1", name: "Sector 4 Parking", locationId: "sector-4-parking", capacity: 7600, occupancyPct: 62, distanceToSangamKm: 2.2, shuttleAvailable: true, shuttleFrequencyMin: 5 },
  { id: "p2", name: "Sector 7 Parking", locationId: "sector-7-parking", capacity: 9400, occupancyPct: 48, distanceToSangamKm: 3.9, shuttleAvailable: true, shuttleFrequencyMin: 7 },
  { id: "p3", name: "Parade Ground Holding", locationId: "parade-ground", capacity: 5200, occupancyPct: 76, distanceToSangamKm: 2.8, shuttleAvailable: true, shuttleFrequencyMin: 4 },
  { id: "p4", name: "Jhusi Reserve Parking", locationId: "jhusi", capacity: 8800, occupancyPct: 38, distanceToSangamKm: 5.1, shuttleAvailable: true, shuttleFrequencyMin: 9 }
];
