import type { PropsWithChildren } from "react";

export function Card({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return <section className={`glass-panel rounded-xl p-5 transition duration-200 hover:border-signal-cyan/30 hover:shadow-glow ${className}`}>{children}</section>;
}
