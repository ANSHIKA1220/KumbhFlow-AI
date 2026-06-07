import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { ParkingRecommendation } from "../../../types/parking.types";

export function ParkingForecastChart({ lots }: { lots: ParkingRecommendation[] }) {
  const data = lots.map((lot) => ({
    name: lot.name.replace(" Parking", ""),
    now: lot.occupancyPct,
    "+30m": Math.min(100, lot.occupancyPct + 8),
    "+60m": Math.min(100, lot.occupancyPct + 17)
  }));
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" domain={[0, 100]} />
        <Tooltip contentStyle={{ background: "#0b171d", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }} />
        <Legend />
        <Bar dataKey="now" fill="#5ca8ff" radius={[6, 6, 0, 0]} />
        <Bar dataKey="+30m" fill="#f2b84b" radius={[6, 6, 0, 0]} />
        <Bar dataKey="+60m" fill="#f65d4e" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
