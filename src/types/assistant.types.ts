export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
  language: "english" | "hindi" | "hinglish";
};
