import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/theme/tokens/colors";
import type { Phrase } from "@/types/learning";

type LessonPhrasesCardProps = {
  phrases: Phrase[];
};

/**
 * Key phrases for the lesson. The same phrases the AI teacher speaks
 * during the call, listed with their translation so they can be
 * reviewed after the session.
 */
export function LessonPhrasesCard({ phrases }: LessonPhrasesCardProps) {
  if (phrases.length === 0) return null;

  return (
    <View className="mx-5 mt-3 rounded-[20px] bg-white px-5 py-4" style={styles.card}>
      <Text className="font-poppins-semibold text-[13px] leading-5 text-text-primary">
        Key phrases
      </Text>
      <Text className="mt-0.5 font-poppins-regular text-[12px] leading-4 text-[#8F94AE]">
        Listen and repeat these with your AI teacher.
      </Text>

      <View className="mt-3">
        {phrases.map((phrase, index) => (
          <View
            key={phrase.phrase}
            className={
              index > 0 ? "mt-3 border-t border-[#EEF0F4] pt-3" : undefined
            }
          >
            <View className="flex-row items-center gap-3">
              <View className="h-9 w-9 items-center justify-center rounded-full bg-[#F1EDFF]">
                <MaterialIcons
                  color={colors.primary.purple}
                  name="volume-up"
                  size={17}
                />
              </View>

              <View className="flex-1">
                <Text className="font-poppins-semibold text-[15px] leading-5 text-text-primary">
                  {phrase.phrase}
                </Text>
                <Text className="mt-0.5 font-poppins-regular text-[13px] leading-4 text-text-secondary">
                  {phrase.translation}
                </Text>
              </View>
            </View>
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
