import { create } from "zustand";
import type { MobilitySnapshot, ScenarioType } from "../types/mobility.types";
import { generateSyntheticSnapshots } from "../features/simulation/logic/syntheticDataGenerator";

type SimulationState = {
  scenario: ScenarioType;
  running: boolean;
  speed: number;
  demoMode: boolean;
  crisisMode: boolean;
  tick: number;
  snapshots: MobilitySnapshot[];
  setScenario: (scenario: ScenarioType) => void;
  setRunning: (running: boolean) => void;
  setSpeed: (speed: number) => void;
  enableDemoMode: () => void;
  setCrisisMode: (crisisMode: boolean) => void;
  advance: () => void;
};

export const useSimulationStore = create<SimulationState>((set, get) => ({
  scenario: "peak-snan",
  running: true,
  speed: 2,
  demoMode: false,
  crisisMode: false,
  tick: 1,
  snapshots: generateSyntheticSnapshots("peak-snan", 1),
  setScenario: (scenario) => set({ scenario, tick: 1, snapshots: generateSyntheticSnapshots(scenario, 1) }),
  setRunning: (running) => set({ running }),
  setSpeed: (speed) => set({ speed }),
  enableDemoMode: () => set({ scenario: "peak-snan", running: true, speed: 5, demoMode: true, crisisMode: false, tick: 9, snapshots: generateSyntheticSnapshots("peak-snan", 9) }),
  setCrisisMode: (crisisMode) => set({ crisisMode, scenario: crisisMode ? "emergency" : "peak-snan", running: true, speed: crisisMode ? 6 : get().speed, tick: crisisMode ? 18 : 1, snapshots: generateSyntheticSnapshots(crisisMode ? "emergency" : "peak-snan", crisisMode ? 18 : 1) }),
  advance: () => {
    const nextTick = get().tick + 1;
    const scenario = get().crisisMode ? "emergency" : get().scenario;
    set({ tick: nextTick, snapshots: generateSyntheticSnapshots(scenario, nextTick) });
  }
}));
