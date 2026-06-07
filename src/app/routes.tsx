import { Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "../components/layout/AppShell";
import { AssistantPage } from "../features/assistant/pages/AssistantPage";
import { DashboardPage } from "../features/dashboard/pages/DashboardPage";
import { EmergencyPage } from "../features/emergency/pages/EmergencyPage";
import { ParkingPage } from "../features/parking/pages/ParkingPage";
import { RoutePlannerPage } from "../features/routing/pages/RoutePlannerPage";
import { SimulationPage } from "../features/simulation/pages/SimulationPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<DashboardPage />} />
        <Route path="simulation" element={<SimulationPage />} />
        <Route path="routes" element={<RoutePlannerPage />} />
        <Route path="parking" element={<ParkingPage />} />
        <Route path="emergency" element={<EmergencyPage />} />
        <Route path="assistant" element={<AssistantPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
