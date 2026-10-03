import { StyleSheet, Text, View } from "react-native";
import { LanguageFlag } from "@/components/LanguageFlag";
import type { Language, Lesson } from "@/types/learning";

type LessonGoalCardProps = {
  lesson: Lesson;
  language: Language;
};

/**
 * The lesson identity card shown under the speaking feedback: the
 * language and title of the lesson that is being taught, plus the
 * goals pulled from the hardcoded lesson data.
 */
export function LessonGoalCard({ lesson, language }: LessonGoalCardProps) {
  return (
    <View className="mx-5 mt-3 rounded-[20px] bg-white px-5 py-4" style={styles.card}>
      <View className="flex-row items-center gap-3">
        <LanguageFlag language={language} size={38} />

        <View className="flex-1">
          <Text className="font-poppins-regular text-[12px] leading-4 text-[#8F94AE]">
            {language.name} · Lesson {lesson.order}
          </Text>
          <Text className="mt-0.5 font-poppins-semibold text-[17px] leading-6 text-text-primary">
            {lesson.title}
          </Text>
        </View>

        <View className="rounded-full bg-[#F1EDFF] px-2.5 py-1">
          <Text className="font-poppins-semibold text-[11px] leading-4 text-[#6C4EF5]">
            +{lesson.xp} XP
          </Text>
        </View>
      </View>

      <Text className="mt-3 font-poppins-regular text-[13px] leading-5 text-text-secondary">
        {lesson.description}
      </Text>

      <Text className="mt-4 font-poppins-semibold text-[13px] leading-5 text-text-primary">
        Lesson goal
      </Text>

      <View className="mt-2 gap-2">
        {lesson.goals.map((goal) => (
          <View key={goal.id} className="flex-row items-start gap-2.5">
            <View className="mt-[7px] h-[6px] w-[6px] rounded-full bg-[#6C4EF5]" />
            <Text className="flex-1 font-poppins-regular text-[14px] leading-5 text-text-secondary">
              {goal.text}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "#0D132B",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
});
