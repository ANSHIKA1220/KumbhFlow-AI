import { CongestionTrendChart } from "../../../components/charts/CongestionTrendChart";
import { Card } from "../../../components/ui/Card";
import type { PredictionPoint } from "../../../types/mobility.types";

export function PredictionPanel({ predictions }: { predictions: PredictionPoint[] }) {
  return (
    <Card>
      <div className="mb-4">
        <h2 className="text-lg font-black text-white">30/60/120 minute forecast</h2>
        <p className="text-sm text-slate-400">Forecast uses current synthetic stream, scenario multipliers, and timeline risk adjustment.</p>
      </div>
      <CongestionTrendChart data={predictions} />
    </Card>
  );
}
