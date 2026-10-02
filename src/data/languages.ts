import type { Language, LanguageId } from "@/types/learning";

export const languages: Language[] = [
  {
    id: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
    description: "Order food, meet people, and get around with the world's second native language.",
    accentColor: "#FF5A5F",
  },
  {
    id: "fr",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    description: "Say bonjour, introduce yourself, and sound natural from day one.",
    accentColor: "#4D8BFF",
  },
  {
    id: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flag: "🇯🇵",
    description: "Master greetings and self-introductions in one of the world's most beautiful languages.",
    accentColor: "#FF4D4F",
  },
];

export function getLanguageById(id: LanguageId): Language | undefined {
  return languages.find((language) => language.id === id);
}
