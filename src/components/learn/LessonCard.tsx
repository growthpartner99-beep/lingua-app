import { Feather } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { getLessonImage } from "@/constants/images";
import { colors } from "@/theme/tokens/colors";
import type { Lesson, LessonStatus } from "@/types/learning";

type LessonCardProps = {
  lesson: Lesson;
  number: number;
  status: LessonStatus;
  onPress: () => void;
};

export function LessonCard({ lesson, number, status, onPress }: LessonCardProps) {
  const isActive = status === "in_progress";
  const isCompleted = status === "completed";
  const isLocked = status === "locked";

  return (
    <Pressable
      accessibilityLabel={`Lesson ${number}, ${lesson.title}, ${status.replace("_", " ")}`}
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        isActive && styles.cardActive,
        pressed && styles.cardPressed,
      ]}
    >
      <View style={styles.body}>
        <Text
          className={
            isActive
              ? "font-poppins-medium text-[13px] leading-[18px] text-primary-purple"
              : "font-poppins-medium text-[13px] leading-[18px] text-text-secondary"
          }
        >
          Lesson {number}
        </Text>

        <Text
          className={
            isActive
              ? "mt-1 font-poppins-bold text-[17px] leading-[22px] text-text-primary"
              : "mt-1 font-poppins-semibold text-[17px] leading-[22px] text-text-primary"
          }
        >
          {lesson.title}
        </Text>

        {isActive && (
          <Text className="mt-1 font-poppins-medium text-[14px] leading-[18px] text-primary-purple">
            In progress
          </Text>
        )}

        {isLocked && (
          <Text className="mt-1 font-poppins-regular text-[13px] leading-[16px] text-text-secondary">
            0 / {lesson.activities.length} activities
          </Text>
        )}
      </View>

      {isCompleted && (
        <View style={styles.check}>
          <Feather name="check" size={15} color="#FFFFFF" />
        </View>
      )}

      {isActive && (
        <Image
          source={getLessonImage(lesson.id)}
          resizeMode="contain"
          style={styles.thumbnail}
        />
      )}

      {isLocked && <Feather name="lock" size={22} color="#4B5563" />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.border.default,
    borderRadius: 18,
    backgroundColor: colors.neutral.background,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  cardActive: {
    borderWidth: 2,
    borderColor: colors.primary.purple,
    backgroundColor: "#F7F5FF",
    paddingHorizontal: 19,
    paddingVertical: 13,
  },
  cardPressed: {
    opacity: 0.75,
  },
  body: {
    flex: 1,
    paddingRight: 12,
  },
  check: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary.green,
  },
  thumbnail: {
    width: 56,
    height: 56,
    borderRadius: 14,
  },
});
