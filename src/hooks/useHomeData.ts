import { colors } from "@/theme/tokens/colors";
import { getLanguageById, languages } from "@/data/languages";
import { getLessonsByLanguage } from "@/data/lessons";
import { getUnitById, units } from "@/data/units";
import { useLanguageStore } from "@/store/language";
import { useProgressStore, type PlanItemId } from "@/store/progress";
import type { Language, Lesson, Unit } from "@/types/learning";

export type PlanItem = {
  id: PlanItemId;
  title: string;
  subtitle: string;
  icon: "book-open" | "headphones" | "chat";
  tint: string;
  done: boolean;
};

function getLevelForUnit(unitOrder: number): string {
  if (unitOrder <= 2) return "A1";
  if (unitOrder <= 4) return "A2";
  return "B1";
}

export type HomeData = {
  language: Language;
  currentUnit: Unit;
  currentLesson: Lesson;
  level: string;
  dailyXp: number;
  dailyGoalXp: number;
  streak: number;
  plan: PlanItem[];
};

export function useHomeData(): HomeData {
  const languageId = useLanguageStore((state) => state.selectedLanguage);
  const dailyXp = useProgressStore((state) => state.dailyXp);
  const dailyGoalXp = useProgressStore((state) => state.dailyGoalXp);
  const streak = useProgressStore((state) => state.streak);
  const completedPlanIds = useProgressStore(
    (state) => state.completedPlanIds
  );
  const completedLessonIds = useProgressStore(
    (state) => state.completedLessonIds
  );

  const language = getLanguageById(languageId) ?? languages[0];
  const languageLessons = getLessonsByLanguage(languageId);

  const currentLesson =
    languageLessons.find(
      (lesson) => !completedLessonIds.includes(lesson.id)
    ) ?? languageLessons[languageLessons.length - 1];

  const currentUnit = getUnitById(currentLesson.unitId) ?? units[0];

  const vocabularyActivity = currentLesson.activities.find(
    (activity) => activity.type === "vocabulary"
  );
  const wordCount =
    vocabularyActivity && vocabularyActivity.type === "vocabulary"
      ? vocabularyActivity.items.length
      : 0;

  const plan: PlanItem[] = [
    {
      id: "lesson",
      title: "Lesson",
      subtitle: currentUnit.title,
      icon: "book-open",
      tint: colors.primary.purple,
      done: completedPlanIds.includes("lesson"),
    },
    {
      id: "conversation",
      title: "AI Conversation",
      subtitle: currentLesson.aiTeacherPrompt.focusWords
        .slice(0, 3)
        .join(", "),
      icon: "headphones",
      tint: colors.primary.purple,
      done: completedPlanIds.includes("conversation"),
    },
    {
      id: "words",
      title: "New words",
      subtitle: `${wordCount} words`,
      icon: "chat",
      tint: "#FF6B6B",
      done: completedPlanIds.includes("words"),
    },
  ];

  return {
    language,
    currentUnit,
    currentLesson,
    level: getLevelForUnit(currentUnit.order),
    dailyXp,
    dailyGoalXp,
    streak,
    plan,
  };
}
