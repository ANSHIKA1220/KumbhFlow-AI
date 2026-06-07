import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { MobilitySnapshot } from "../../types/mobility.types";
import { mockLocations } from "../../data/mockLocations";

export function CrowdDistributionChart({ snapshots }: { snapshots: MobilitySnapshot[] }) {
  const data = snapshots.slice(0, 6).map((snapshot) => ({ name: mockLocations.find((item) => item.id === snapshot.locationId)?.name ?? snapshot.locationId, value: snapshot.crowdDensity }));
  const colors = ["#42d9d2", "#5ca8ff", "#f2b84b", "#f65d4e", "#20c783", "#8b5cf6"];
  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Tooltip contentStyle={{ background: "#0b171d", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }} />
        <Pie data={data} dataKey="value" nameKey="name" innerRadius={50} outerRadius={84}>
          {data.map((_, index) => <Cell key={index} fill={colors[index % colors.length]} />)}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
