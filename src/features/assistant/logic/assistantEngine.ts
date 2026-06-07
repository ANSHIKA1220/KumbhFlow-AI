import type { ChatMessage } from "../../../types/assistant.types";
import type { ParkingRecommendation } from "../../../types/parking.types";
import type { RankedRoute } from "../../../types/route.types";

function detectLanguage(text: string): ChatMessage["language"] {
  if (/mujhe|jana|kaha|kahan|hai|milegi|bheed|zyada|mera/i.test(text)) return "hinglish";
  return "english";
}

export function answerAssistant(text: string, bestRoute?: RankedRoute, bestParking?: ParkingRecommendation): ChatMessage {
  const language = detectLanguage(text);
  const lower = text.toLowerCase();
  const routeName = bestRoute?.name ?? "Sector 4 Safe Loop";
  const eta = bestRoute?.estimatedMinutes ?? 38;
  const risk = bestRoute?.riskLevel ?? "medium";
  const parkingName = bestParking?.name ?? "Sector 7 Parking";
  const shuttle = bestParking?.shuttleFrequencyMin ?? 7;
  let response = "";

  if (/emergency|help|madad|lost|person|security/.test(lower)) {
    response =
      language === "english"
        ? "Emergency guidance: move to the nearest police help point, avoid dense ghat approaches, and ask the control room to generate a green corridor. Next action: share your location with a marshal."
        : "Emergency help ke liye nearest police help point par jaiye, dense ghat approach avoid kijiye, aur marshal ko location batayein. Control room green corridor generate karega.";
  } else if (/park|parking/.test(lower)) {
    response =
      language === "english"
        ? `Recommended parking: ${parkingName}. Shuttle ETA: ${shuttle} minutes. Risk level: moderate. Reason: better capacity, lower overflow probability, and reliable shuttle access. Next action: follow parking diversion boards.`
        : `Recommended parking: ${parkingName}. Shuttle ${shuttle} min me milegi. Risk moderate hai. Reason: capacity better hai aur overflow chance kam hai.`;
  } else if (/bus|shuttle|milegi|kaha/.test(lower)) {
    response =
      language === "english"
        ? "Shuttle guidance: use Sector 4 or Sector 7. ETA: 5-9 minutes. Risk level: low to moderate. Next action: avoid direct Sangam Road if boards show high density."
        : "Shuttle Sector 4 ya Sector 7 se milegi. ETA 5-9 minutes hai. Direct Sangam Road avoid karein agar density high dikhe.";
  } else if (/safe|risk|bheed|crowd|zyada|elderly|disabled|group|mera/.test(lower)) {
    response =
      language === "english"
        ? `Crowd safety: ${routeName} is safer for your group. ETA: ${eta} minutes. Risk level: ${risk}. Reason: lower predicted density and better emergency access. Next action: move in smaller batches.`
        : `Crowd safety: ${routeName} aapke group ke liye safer hai. ETA ${eta} minutes. Risk ${risk} hai. Reason: density kam hai aur emergency access better hai.`;
  } else {
    response =
      language === "english"
        ? `Recommended route: ${routeName}. ETA: ${eta} minutes. Risk level: ${risk}. Reason: avoids predicted high-density corridors. Next action: keep to marked pedestrian lanes.`
        : `Recommended route: ${routeName}. ETA ${eta} minutes. Risk ${risk} hai. Marked pedestrian lane follow karein.`;
  }

  return { id: crypto.randomUUID(), role: "assistant", text: response, language };
}
