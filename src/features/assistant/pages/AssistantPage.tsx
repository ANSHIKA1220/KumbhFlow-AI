import { useState } from "react";
import { PageHeader } from "../../../components/layout/PageHeader";
import { Card } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { AlertFeed } from "../../dashboard/components/AlertFeed";
import { useMobilityData } from "../../../hooks/useMobilityData";
import { useParking } from "../../../hooks/useParking";
import { useRoutePlanner } from "../../../hooks/useRoutePlanner";
import type { ChatMessage } from "../../../types/assistant.types";
import { answerAssistant } from "../logic/assistantEngine";
import { ChatWindow } from "../components/ChatWindow";
import { QuickPrompts } from "../components/QuickPrompts";

export function AssistantPage() {
  const { bestRoute } = useRoutePlanner();
  const { bestParking } = useParking();
  const { alerts } = useMobilityData();
  const [text, setText] = useState("Mujhe Sangam jana hai");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "sample-user", role: "user", language: "hinglish", text: "Mujhe Sangam jana hai" },
    { id: "sample-bot", role: "assistant", language: "hinglish", text: "Recommended Route:\nCivil Lines -> Parade -> Sangam\n\nETA:\n49 min\n\nRisk:\nModerate\n\nReason:\n32% lower crowd density than fastest route.\n\nAlternative:\nJunction -> Sector 4 -> Sangam" }
  ]);
  const send = (prompt = text) => {
    if (!prompt.trim()) return;
    const user: ChatMessage = { id: crypto.randomUUID(), role: "user", language: "english", text: prompt };
    setMessages((items) => [...items, user, answerAssistant(prompt, bestRoute, bestParking)]);
    setText("");
  };
  return (
    <>
      <PageHeader eyebrow="Pilgrim guidance AI" title="Multilingual Mobility Copilot" description="Ask for routes, parking, shuttle help, emergency support, or crowd safety guidance in English, Hindi, or Hinglish. It runs locally now and can integrate with OpenAI/Gemini later." />
      <div className="grid gap-4 xl:grid-cols-[1.3fr_0.7fr]">
        <Card>
          <QuickPrompts onPick={send} />
          <div className="mt-4"><ChatWindow messages={messages} /></div>
          <form className="mt-4 flex gap-3" onSubmit={(event) => { event.preventDefault(); send(); }}>
            <input className="min-w-0 flex-1 rounded-lg border border-white/10 bg-command-800 p-3" value={text} onChange={(event) => setText(event.target.value)} />
            <Button type="submit">Ask</Button>
          </form>
        </Card>
        <div className="space-y-4">
          <Card><h2 className="mb-2 text-lg font-black text-white">Current safe route</h2><p className="text-sm text-slate-300">{bestRoute?.name}</p><p className="mt-1 text-xs text-slate-500">ETA {bestRoute?.estimatedMinutes} min | Risk {bestRoute?.riskLevel}</p></Card>
          <Card>
            <h2 className="mb-3 text-lg font-black text-white">Copilot Response Card</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between rounded-lg bg-white/5 p-3"><span>Recommended Route</span><strong>{bestRoute?.name}</strong></div>
              <div className="flex justify-between rounded-lg bg-white/5 p-3"><span>ETA</span><strong>{bestRoute?.estimatedMinutes} min</strong></div>
              <div className="flex justify-between rounded-lg bg-white/5 p-3"><span>Risk</span><strong>{bestRoute?.riskLevel}</strong></div>
              <div className="rounded-lg bg-signal-cyan/10 p-3 text-signal-cyan">Source: Predictive Mobility Engine</div>
            </div>
          </Card>
          <Card><h2 className="mb-2 text-lg font-black text-white">Nearby parking status</h2><p className="text-sm text-slate-300">{bestParking?.name}</p><p className="mt-1 text-xs text-slate-500">{bestParking?.occupancyPct}% occupied | Shuttle {bestParking?.shuttleFrequencyMin} min</p></Card>
          <Card><h2 className="mb-3 text-lg font-black text-white">Emergency help</h2><p className="text-sm text-slate-300">For urgent help, move to the nearest police help point and request a green corridor.</p></Card>
          <Card><h2 className="mb-3 text-lg font-black text-white">Supported languages</h2><p className="text-sm text-slate-300">English, Hindi, and Hinglish prompts are supported by local intent detection.</p></Card>
          <Card><h2 className="mb-3 text-lg font-black text-white">Active alerts</h2><AlertFeed alerts={alerts.slice(0, 2)} /></Card>
        </div>
      </div>
    </>
  );
}
