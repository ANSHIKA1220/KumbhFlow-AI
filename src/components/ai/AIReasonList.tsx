import { Sparkles } from "lucide-react";

export function AIReasonList({ reasons }: { reasons: string[] }) {
  return (
    <div className="space-y-2">
      {reasons.map((reason) => (
        <div key={reason} className="flex gap-3 rounded-lg bg-white/5 p-3 text-sm text-slate-300">
          <Sparkles className="mt-0.5 shrink-0 text-signal-cyan" size={16} />
          <span>{reason}</span>
        </div>
      ))}
    </div>
  );
}
