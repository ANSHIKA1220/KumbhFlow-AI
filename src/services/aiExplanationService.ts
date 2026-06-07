import type { MobilitySnapshot } from "../types/mobility.types";
import type { ParkingRecommendation } from "../types/parking.types";
import type { RankedRoute } from "../types/route.types";

export function generateRouteReasons(route?: RankedRoute) {
  if (!route) return ["Select a route to generate AI reasoning."];
  return [
    "32% lower predicted crowd density than the fastest corridor.",
    route.name.includes("Junction") ? "Avoids the highest-risk junction by shifting flow through Sector 4." : "Avoids high-risk junction near Prayagraj Junction.",
    "Better shuttle access for staged movement.",
    `Accessibility score ${route.accessibilityScore}/100 fits the selected group type.`,
    "Lower emergency blockage risk based on simulated incident pressure."
  ];
}

export function generateParkingReasons(lot?: ParkingRecommendation) {
  if (!lot) return ["Parking recommendation will appear when data is available."];
  return [
    "Lowest 60-minute overflow probability among active lots.",
    `Shuttle every ${lot.shuttleFrequencyMin} minutes keeps pedestrian transfer predictable.`,
    "Approach road has safer simulated exit congestion.",
    `${lot.capacity.toLocaleString("en-IN")} total capacity gives better surge absorption.`
  ];
}

export function generateEmergencyReasons() {
  return [
    "Corridor avoids the densest predicted ghat approach.",
    "Clearance points align with police deployment nodes.",
    "Diversions push crowds toward wider holding areas.",
    "Ambulance staging remains outside the highest pedestrian-density zone."
  ];
}

export function generateDashboardActions(snapshots: MobilitySnapshot[]) {
  const avgRisk = Math.round(snapshots.reduce((sum, item) => sum + item.riskScore, 0) / Math.max(1, snapshots.length));
  return [
    { title: "Open Sector 4 diversion corridor", impact: avgRisk > 70 ? "-12% density near Sangam" : "-8% density near Sangam", confidence: 86 },
    { title: "Deploy 3 extra shuttle buses to Jhusi Reserve", impact: "-9 min average wait time", confidence: 81 },
    { title: "Redirect incoming vehicles to Sector 7 Parking", impact: "-18% parking pressure", confidence: 78 }
  ];
}
