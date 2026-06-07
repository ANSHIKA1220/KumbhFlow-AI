import { PageHeader } from "../../../components/layout/PageHeader";
import { MobilityMap } from "../../../components/maps/MobilityMap";
import { AIReasonList } from "../../../components/ai/AIReasonList";
import { ImpactMetric } from "../../../components/ai/ImpactMetric";
import { Card } from "../../../components/ui/Card";
import { useMobilityData } from "../../../hooks/useMobilityData";
import { useParking } from "../../../hooks/useParking";
import { useRoutePlanner } from "../../../hooks/useRoutePlanner";
import { generateRouteReasons } from "../../../services/aiExplanationService";
import { RouteComparisonTable } from "../components/RouteComparisonTable";
import { RouteRecommendationCard } from "../components/RouteRecommendationCard";
import { RouteSearchForm } from "../components/RouteSearchForm";
import { RouteVisualComparison } from "../components/RouteVisualComparison";

export function RoutePlannerPage() {
  const planner = useRoutePlanner();
  const { snapshots, alerts } = useMobilityData();
  const { recommendations } = useParking();
  return (
    <>
      <PageHeader eyebrow="Smart route recommendations" title="Safest route, not shortest route" description="Scores routes using distance, crowd density, prediction, accessibility, and blockage risk." />
      <Card className="mb-4"><RouteSearchForm value={planner.routeInput} onChange={planner.setRouteInput} /></Card>
      <Card className="mb-4"><h2 className="mb-4 text-lg font-black text-white">Route A / B / C visual comparison</h2><RouteVisualComparison routes={planner.rankedRoutes} /></Card>
      <div className="grid gap-4 xl:grid-cols-[1fr_1.2fr]">
        <Card><RouteRecommendationCard route={planner.bestRoute} /><div className="mt-4"><h2 className="mb-3 text-lg font-black text-white">Why AI selected this route</h2><AIReasonList reasons={generateRouteReasons(planner.bestRoute)} /></div></Card>
        <Card><MobilityMap snapshots={snapshots} alerts={alerts} parkingLots={recommendations} route={planner.bestRoute} /></Card>
      </div>
      <Card className="mt-4">
        <h2 className="mb-3 text-lg font-black text-white">Route scoring breakdown</h2>
        <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
          <ImpactMetric label="Distance score" before="Fastest" after={`${Math.max(1, 100 - Math.round((planner.bestRoute?.distanceKm ?? 6) * 8))}/100`} />
          <ImpactMetric label="Crowd score" before="Raw" after={`${Math.max(1, 100 - (planner.bestRoute?.riskScore ?? 55))}/100`} />
          <ImpactMetric label="Accessibility" before="Required" after={`${planner.bestRoute?.accessibilityScore ?? 70}/100`} />
          <ImpactMetric label="Forecast risk" before="30m" after={`${planner.bestRoute?.riskScore ?? 55}/100`} />
          <ImpactMetric label="Blockage" before="High risk" after="Low" improvement="Avoided" />
          <ImpactMetric label="Final safety" before="Baseline" after={`${Math.max(1, 100 - Math.round((planner.bestRoute?.score ?? 120) / 3))}/100`} />
        </div>
      </Card>
      <Card className="mt-4"><h2 className="mb-4 text-lg font-black text-white">Alternative route comparison</h2><RouteComparisonTable routes={planner.rankedRoutes} /></Card>
    </>
  );
}
