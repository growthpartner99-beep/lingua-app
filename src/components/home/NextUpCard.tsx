import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { images } from "@/constants/images";
import { posthog } from "@/lib/posthog";

const handleAiTutorOpen = () => {
  posthog?.capture("ai_tutor_opened", { entry_point: "home_next_up" });
  router.push("/ai-teacher");
};

export function NextUpCard() {
  return (
    <Pressable
      onPress={handleAiTutorOpen}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.text}>
        <Text className="font-poppins-medium text-[13px] text-text-secondary">
          Next up
        </Text>
        <Text className="mt-1 font-poppins-bold text-[18px] text-text-primary">
          AI Video Call
        </Text>
        <Text className="mt-0.5 font-poppins-regular text-[14px] text-text-secondary">
          Practice speaking
        </Text>
      </View>

      <View style={styles.cluster}>
        <Image
          source={images.aiTutor}
          resizeMode="cover"
          style={styles.avatar}
        />
        <View style={styles.videoButton}>
          <MaterialIcons name="videocam" size={21} color="#FFFFFF" />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 20,
    backgroundColor: "#EEF7E6",
    paddingLeft: 16,
    paddingRight: 12,
    paddingVertical: 12,
  },
  cardPressed: {
    opacity: 0.85,
  },
  text: {
    flex: 1,
    marginRight: 8,
  },
  cluster: {
    position: "relative",
    width: 138,
    height: 90,
  },
  avatar: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#FFFFFF",
  },
  videoButton: {
    position: "absolute",
    right: 0,
    top: 24,
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: "#21C16B",
  },
});
