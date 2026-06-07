import type { PropsWithChildren } from "react";

export function Badge({ children, tone = "neutral" }: PropsWithChildren<{ tone?: "neutral" | "green" | "amber" | "red" | "blue" }>) {
  const tones = {
    neutral: "bg-white/10 text-slate-200",
    green: "bg-signal-green/15 text-signal-green",
    amber: "bg-signal-amber/15 text-signal-amber",
    red: "bg-signal-red/15 text-signal-red",
    blue: "bg-signal-blue/15 text-signal-blue"
  };
  return <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${tones[tone]}`}>{children}</span>;
}
