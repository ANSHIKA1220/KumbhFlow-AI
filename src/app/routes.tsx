import { lazy, Suspense } from "react";
import type { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "../components/layout/AppShell";
import { LoadingState } from "../components/ui/LoadingState";

const AssistantPage = lazy(() => import("../features/assistant/pages/AssistantPage").then((module) => ({ default: module.AssistantPage })));
const DashboardPage = lazy(() => import("../features/dashboard/pages/DashboardPage").then((module) => ({ default: module.DashboardPage })));
const EmergencyPage = lazy(() => import("../features/emergency/pages/EmergencyPage").then((module) => ({ default: module.EmergencyPage })));
const ParkingPage = lazy(() => import("../features/parking/pages/ParkingPage").then((module) => ({ default: module.ParkingPage })));
const RoutePlannerPage = lazy(() => import("../features/routing/pages/RoutePlannerPage").then((module) => ({ default: module.RoutePlannerPage })));
const SimulationPage = lazy(() => import("../features/simulation/pages/SimulationPage").then((module) => ({ default: module.SimulationPage })));

function LazyPage({ children }: { children: ReactNode }) {
  return <Suspense fallback={<LoadingState />}>{children}</Suspense>;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<LazyPage><DashboardPage /></LazyPage>} />
        <Route path="simulation" element={<LazyPage><SimulationPage /></LazyPage>} />
        <Route path="routes" element={<LazyPage><RoutePlannerPage /></LazyPage>} />
        <Route path="parking" element={<LazyPage><ParkingPage /></LazyPage>} />
        <Route path="emergency" element={<LazyPage><EmergencyPage /></LazyPage>} />
        <Route path="assistant" element={<LazyPage><AssistantPage /></LazyPage>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
