export type RiskLevel = "low" | "medium" | "high" | "critical";
export type ScenarioType = "normal" | "peak-snan" | "train-surge" | "rain" | "emergency";

export type LocationPoint = {
  id: string;
  name: string;
  type: "ghat" | "station" | "parking" | "road" | "landmark" | "bridge";
  lat: number;
  lng: number;
};

export type MobilitySnapshot = {
  locationId: string;
  crowdDensity: number;
  vehicleDensity: number;
  parkingPressure: number;
  eventSurge: number;
  shuttleCount: number;
  riskScore: number;
  riskLevel: RiskLevel;
  confidence?: number;
  predictedCrowd15?: number;
  predictedCrowd30?: number;
  predictedCrowd60?: number;
  predictedCrowd120?: number;
  incidentProbability?: number;
  overflowProbability?: number;
  accessibilityScore?: number;
  emergencyAccessScore?: number;
  shuttleFrequency?: number;
  exitCongestionRisk?: number;
  aiReason?: string;
  updatedAt: string;
};

export type PredictionPoint = {
  label: "now" | "15m" | "30m" | "60m" | "120m";
  riskScore: number;
  crowdDensity: number;
  vehicleDensity: number;
};

export type ScenarioConfig = {
  id: ScenarioType;
  name: string;
  description: string;
  crowdMultiplier: number;
  vehicleMultiplier: number;
  parkingMultiplier: number;
  surge: number;
};
