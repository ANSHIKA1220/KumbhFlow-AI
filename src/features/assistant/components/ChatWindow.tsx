import type { ChatMessage } from "../../../types/assistant.types";
import { MessageBubble } from "./MessageBubble";

export function ChatWindow({ messages }: { messages: ChatMessage[] }) {
  return <div className="flex min-h-[420px] flex-col gap-3 rounded-xl border border-white/10 bg-command-900/70 p-4">{messages.map((message) => <MessageBubble key={message.id} message={message} />)}</div>;
}
