import type { ButtonHTMLAttributes } from "react";

export function Button({ className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`rounded-lg bg-signal-cyan px-4 py-2.5 text-sm font-bold text-command-950 transition hover:bg-white disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}
