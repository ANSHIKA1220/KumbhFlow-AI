import type { PropsWithChildren } from "react";
import { Button } from "./Button";

export function Modal({ open, onClose, children }: PropsWithChildren<{ open: boolean; onClose: () => void }>) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4">
      <div className="glass-panel max-w-xl rounded-xl p-5">
        {children}
        <Button className="mt-4" onClick={onClose}>Close</Button>
      </div>
    </div>
  );
}
