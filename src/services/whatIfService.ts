export type WhatIfType = "train-surge" | "close-route" | "extra-parking" | "extra-shuttles" | "rain" | "emergency-corridor";

export type WhatIfResult = {
  title: string;
  improvementScore: number;
  metrics: Array<{ label: string; before: string; after: string; improvement?: string }>;
};

export function simulateScenarioImpact(type: WhatIfType): WhatIfResult {
  const results: Record<WhatIfType, WhatIfResult> = {
    "train-surge": { title: "Add train surge", improvementScore: 0, metrics: [{ label: "Crowd density", before: "72%", after: "89%" }, { label: "Route risk", before: "Moderate", after: "High" }, { label: "Rail wait", before: "14 min", after: "28 min" }] },
    "close-route": { title: "Close high-risk route", improvementScore: 11, metrics: [{ label: "Route risk", before: "High", after: "Moderate", improvement: "Safer flow" }, { label: "ETA", before: "38 min", after: "46 min" }, { label: "Blockage risk", before: "64%", after: "31%" }] },
    "extra-parking": { title: "Open extra parking", improvementScore: 16, metrics: [{ label: "Parking pressure", before: "82%", after: "64%", improvement: "-18%" }, { label: "Exit congestion", before: "High", after: "Moderate" }, { label: "Queue time", before: "19 min", after: "11 min" }] },
    "extra-shuttles": { title: "Add extra shuttles", improvementScore: 18, metrics: [{ label: "Average wait", before: "21 min", after: "12 min", improvement: "-9 min" }, { label: "Crowd density", before: "84%", after: "72%", improvement: "-12%" }, { label: "Route risk", before: "High", after: "Moderate" }] },
    rain: { title: "Trigger rain disruption", improvementScore: 0, metrics: [{ label: "Walking ETA", before: "34 min", after: "47 min" }, { label: "Vehicle load", before: "62%", after: "79%" }, { label: "Shuttle demand", before: "Normal", after: "High" }] },
    "emergency-corridor": { title: "Trigger emergency corridor", improvementScore: 22, metrics: [{ label: "Response ETA", before: "18 min", after: "11 min", improvement: "-7 min" }, { label: "Route risk", before: "High", after: "Moderate" }, { label: "Clearance time", before: "16 min", after: "9 min" }] }
  };
  return results[type];
}

export function compareBeforeAfter(type: WhatIfType) {
  return simulateScenarioImpact(type).metrics;
}

export function calculateImprovementScore(type: WhatIfType) {
  return simulateScenarioImpact(type).improvementScore;
}
