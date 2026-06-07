import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { ParkingRecommendation } from "../../types/parking.types";

export function ParkingOccupancyChart({ data }: { data: ParkingRecommendation[] }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#94a3b8" hide />
        <YAxis stroke="#94a3b8" domain={[0, 100]} />
        <Tooltip contentStyle={{ background: "#0b171d", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }} />
        <Bar dataKey="occupancyPct" fill="#5ca8ff" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
