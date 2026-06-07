export function AIConfidenceBadge({ score }: { score: number }) {
  const tone = score >= 85 ? "text-signal-green bg-signal-green/15" : score >= 75 ? "text-signal-amber bg-signal-amber/15" : "text-signal-red bg-signal-red/15";
  return <span className={`rounded-full px-3 py-1 text-xs font-black ${tone}`}>AI Confidence: {score}%</span>;
}
