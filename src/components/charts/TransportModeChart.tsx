import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { mockTransport } from "../../data/mockTransport";

export function TransportModeChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={mockTransport}>
        <XAxis dataKey="mode" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip contentStyle={{ background: "#0b171d", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }} />
        <Bar dataKey="active" fill="#20c783" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
