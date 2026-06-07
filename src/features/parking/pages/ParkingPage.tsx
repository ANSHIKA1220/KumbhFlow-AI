import { AIReasonList } from "../../../components/ai/AIReasonList";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Card } from "../../../components/ui/Card";
import { useParking } from "../../../hooks/useParking";
import { generateParkingReasons } from "../../../services/aiExplanationService";
import { ParkingForecastChart } from "../components/ParkingForecastChart";
import { ParkingLotCard } from "../components/ParkingLotCard";
import { ParkingRecommendationPanel } from "../components/ParkingRecommendationPanel";
import { ShuttleStatusPanel } from "../components/ShuttleStatusPanel";

export function ParkingPage() {
  const { recommendations, bestParking } = useParking();
  return (
    <>
      <PageHeader eyebrow="Parking allocation intelligence" title="Predict full lots before vehicles arrive" description="Recommendations balance occupancy, distance, shuttle availability, and congestion near parking corridors." />
      <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
        <Card><ParkingRecommendationPanel lot={bestParking} /><div className="mt-4"><h2 className="mb-3 text-lg font-black text-white">Parking Occupancy Forecast</h2><ParkingForecastChart lots={recommendations} /></div><div className="mt-4"><h2 className="mb-3 text-lg font-black text-white">Why this parking was recommended</h2><AIReasonList reasons={generateParkingReasons(bestParking)} /></div><div className="mt-4"><ShuttleStatusPanel lots={recommendations} /></div></Card>
        <div className="grid gap-4">{recommendations.map((lot, index) => <ParkingLotCard key={lot.id} lot={lot} best={index === 0} />)}</div>
      </div>
    </>
  );
}
