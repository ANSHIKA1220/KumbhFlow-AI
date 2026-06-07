import { RiskBadge } from "../../../components/ui/RiskBadge";
import type { Alert } from "../../../types/alert.types";

export function AlertFeed({ alerts }: { alerts: Alert[] }) {
  return (
    <div className="space-y-3">
      {alerts.slice(0, 6).map((alert) => (
        <article key={alert.id} className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="mb-2 flex items-center justify-between gap-3">
            <strong className="text-white">{alert.title}</strong>
            <RiskBadge level={alert.severity} />
          </div>
          <p className="text-sm text-slate-400">{alert.message}</p>
          <span className="mt-2 block text-xs text-slate-500">{alert.timestamp}</span>
        </article>
      ))}
    </div>
  );
}
