import { Card } from "./Card";

export function StatCard({ label, value, helper }: { label: string; value: string | number; helper?: string }) {
  return (
    <Card className="min-h-28">
      <p className="text-sm font-semibold text-slate-400">{label}</p>
      <strong className="mt-2 block text-3xl text-white">{value}</strong>
      {helper ? <span className="mt-2 block text-xs text-slate-500">{helper}</span> : null}
    </Card>
  );
}
