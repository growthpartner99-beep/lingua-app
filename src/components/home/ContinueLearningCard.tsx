import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { images } from "@/constants/images";
import type { Language, Unit } from "@/types/learning";
import { posthog, posthogLogger } from "@/lib/posthog";

type ContinueLearningCardProps = {
  language: Language;
  unit: Unit;
  level: string;
};

export function ContinueLearningCard({
  language,
  unit,
  level,
}: ContinueLearningCardProps) {
  const handleContinue = () => {
    posthog?.capture("learning_continue_opened", {
      language_id: language.id,
      unit_order: unit.order,
      level,
    });
    posthogLogger.info("learning session opened", {
      language_id: language.id,
      unit_order: unit.order,
      level,
    });
    router.push("/learn");
  };

  return (
    <View style={styles.card}>
      <View pointerEvents="none" style={styles.glowTop} />
      <View pointerEvents="none" style={styles.glowBottom} />

      <Image
        source={images.palace}
        resizeMode="contain"
        style={styles.palace}
      />

      <Text className="font-poppins-medium text-[15px] text-white/80">
        Continue learning
      </Text>

      <Text className="mt-1 font-poppins-bold text-[30px] leading-[38px] text-white">
        {language.name}
      </Text>

      <Text className="mt-0.5 font-poppins-semibold text-[15px] text-white/90">
        {level} • Unit {unit.order}
      </Text>

      <Pressable
        onPress={handleContinue}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "relative",
    marginTop: 20,
    overflow: "hidden",
    borderRadius: 24,
    backgroundColor: "#6C4EF5",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  glowTop: {
    position: "absolute",
    top: -56,
    right: -40,
    width: 176,
    height: 176,
    borderRadius: 88,
    backgroundColor: "rgba(255, 255, 255, 0.10)",
  },
  glowBottom: {
    position: "absolute",
    bottom: -44,
    left: -48,
    width: 224,
    height: 120,
    borderRadius: 60,
    backgroundColor: "rgba(255, 255, 255, 0.10)",
  },
  palace: {
    position: "absolute",
    right: -4,
    bottom: 0,
    width: 164,
    height: 164,
  },
  button: {
    marginTop: 14,
    height: 40,
    width: 104,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#6C4EF5",
  },
});
