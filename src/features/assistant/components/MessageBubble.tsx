import type { ChatMessage } from "../../../types/assistant.types";

export function MessageBubble({ message }: { message: ChatMessage }) {
  const mine = message.role === "user";
  return <div className={`max-w-[82%] whitespace-pre-line rounded-xl p-3 text-sm leading-6 ${mine ? "ml-auto bg-signal-blue text-command-950" : "bg-white/10 text-slate-100"}`}>{message.text}</div>;
}
