import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { PredictionPoint } from "../../types/mobility.types";

export function CongestionTrendChart({ data }: { data: PredictionPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={data}>
        <XAxis dataKey="label" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" domain={[0, 100]} />
        <Tooltip contentStyle={{ background: "#0b171d", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }} />
        <Line type="monotone" dataKey="riskScore" stroke="#42d9d2" strokeWidth={3} dot />
        <Line type="monotone" dataKey="crowdDensity" stroke="#f2b84b" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
