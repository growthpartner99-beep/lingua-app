import type { LanguageId, Unit } from "@/types/learning";

export const units: Unit[] = [
  {
    id: "es-u1",
    languageId: "es",
    title: "Greetings & Basics",
    description: "Say hello, say goodbye, and introduce yourself.",
    order: 1,
    icon: "👋",
    color: "#21C16B",
  },
  {
    id: "es-u2",
    languageId: "es",
    title: "At the Café",
    description: "Order a drink and ask for the price.",
    order: 2,
    icon: "☕",
    color: "#FFC800",
  },
  {
    id: "fr-u1",
    languageId: "fr",
    title: "Greetings & Basics",
    description: "Greet anyone at any time of day and start a conversation.",
    order: 1,
    icon: "👋",
    color: "#4D8BFF",
  },
  {
    id: "ja-u1",
    languageId: "ja",
    title: "Greetings & Basics",
    description: "Learn the greetings you will hear every single day in Japan.",
    order: 1,
    icon: "👋",
    color: "#FF4D4F",
  },
];

export function getUnitById(id: string): Unit | undefined {
  return units.find((unit) => unit.id === id);
}

export function getUnitsByLanguage(languageId: LanguageId): Unit[] {
  return units
    .filter((unit) => unit.languageId === languageId)
    .sort((a, b) => a.order - b.order);
}
