import { mockScenarios } from "../../../data/mockScenarios";
import type { ScenarioConfig, ScenarioType } from "../../../types/mobility.types";

export function getScenarioConfig(scenario: ScenarioType): ScenarioConfig {
  return mockScenarios.find((item) => item.id === scenario) ?? mockScenarios[0];
}
