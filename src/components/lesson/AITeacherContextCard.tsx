import { Image, StyleSheet, Text, View } from "react-native";
import { images } from "@/constants/images";
import type { AITeacherPrompt } from "@/types/learning";

type AITeacherContextCardProps = {
  prompt: AITeacherPrompt;
};

/**
 * The AI teacher context for the lesson: who the teacher is, the line
 * they open with, the words they focus on and how they correct
 * mistakes. Everything comes from the hardcoded lesson data.
 */
export function AITeacherContextCard({ prompt }: AITeacherContextCardProps) {
  return (
    <View className="mx-5 mt-3 rounded-[20px] bg-white px-5 py-4" style={styles.card}>
      <Text className="font-poppins-semibold text-[13px] leading-5 text-text-primary">
        Meet your AI teacher
      </Text>

      <View className="mt-3 flex-row items-center gap-3">
        <View className="h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-[#F1EDFF]">
          <Image
            resizeMode="contain"
            source={images.mascotAuth}
            style={styles.avatar}
          />
        </View>
        <View className="flex-1">
          <Text className="font-poppins-semibold text-[14px] leading-5 text-text-primary">
            {prompt.persona}
          </Text>
          <Text className="font-poppins-regular text-[12px] leading-4 text-[#8F94AE]">
            AI tutor · Audio lesson
          </Text>
        </View>
      </View>

      <View className="mt-3 rounded-[14px] bg-[#F7F6FB] px-3 py-2.5">
        <Text className="font-poppins-regular text-[13px] leading-5 text-text-secondary">
          “{prompt.openingLine}”
        </Text>
      </View>

      <Text className="mt-4 font-poppins-semibold text-[13px] leading-5 text-text-primary">
        Focus words
      </Text>
      <View className="mt-2 flex-row flex-wrap gap-2">
        {prompt.focusWords.map((word) => (
          <View
            key={word}
            className="rounded-full bg-[#F1EDFF] px-3 py-1.5"
          >
            <Text className="font-poppins-medium text-[12px] leading-4 text-[#6C4EF5]">
              {word}
            </Text>
          </View>
        ))}
      </View>

      <Text className="mt-4 font-poppins-regular text-[13px] leading-5 text-text-secondary">
        {prompt.correctionStyle}
      </Text>
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
  avatar: {
    width: 44,
    height: 44,
    marginTop: 6,
  },
});
