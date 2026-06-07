export type ParkingLot = {
  id: string;
  name: string;
  locationId: string;
  capacity: number;
  occupancyPct: number;
  distanceToSangamKm: number;
  shuttleAvailable: boolean;
  shuttleFrequencyMin: number;
};

export type ParkingRecommendation = ParkingLot & {
  predictedFullInMin: number;
  score: number;
  reason: string;
};
