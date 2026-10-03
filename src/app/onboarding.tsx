import { router, Stack } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants/images";
import { posthog, posthogLogger } from "@/lib/posthog";

export default function Onboarding() {
  const handleGetStarted = () => {
    posthog?.capture("onboarding_started");
    posthogLogger.info("onboarding flow started");
    router.push("/sign-up");
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView
        className="flex-1"
        contentContainerStyle={styles.scrollContent}
      >
        <View className="flex-1">
          <View className="mt-4 px-6">
            <View className="flex-row items-center justify-center gap-2">
              <Image
                source={images.mascotLogo}
                resizeMode="contain"
                style={styles.logoImage}
              />
              <Text className="font-poppins-bold text-[30px] text-text-primary">
                muolingo
              </Text>
            </View>

            <Text className="mt-10 font-poppins-bold text-[36px] leading-[44px] text-text-primary">
              Your AI language{"\n"}
              <Text className="text-primary-purple">teacher</Text>.
            </Text>

            <Text className="mt-4 font-poppins-regular text-[17px] leading-[30px] text-text-secondary">
              Real conversations, personalized lessons, anytime, anywhere.
            </Text>
          </View>

          <View className="mt-2 flex-1 justify-center">
            <View className="relative aspect-square max-h-full w-full">
              <View className="absolute bottom-[7%] left-0 right-0 items-center">
                <View className="h-4 w-[46%] rounded-full bg-[#EBEDF1]" />
              </View>

              <Image
                source={images.mascotWelcome}
                resizeMode="contain"
                style={styles.mascotImage}
              />

              <View
                className="absolute left-[11%] top-[12%]"
                style={styles.helloBubble}
              >
                <View
                  style={[styles.bubbleTail, { borderTopColor: "#E8F1FD" }]}
                />
                <View className="rounded-[14px] bg-[#E8F1FD] px-5 py-3">
                  <Text className="font-poppins-semibold text-[20px] text-text-primary">
                    Hello!
                  </Text>
                </View>
              </View>

              <View
                className="absolute right-[9%] top-[7%]"
                style={styles.holaBubble}
              >
                <View
                  style={[styles.bubbleTail, { borderTopColor: "#EDEAFE" }]}
                />
                <View className="rounded-[14px] bg-[#EDEAFE] px-5 py-3">
                  <Text className="font-poppins-semibold text-[20px] text-primary-purple">
                    ¡Hola!
                  </Text>
                </View>
              </View>

              <View
                className="absolute right-[2%] top-[32%]"
                style={styles.nihaoBubble}
              >
                <View
                  style={[styles.bubbleTail, { borderTopColor: "#FDECEC" }]}
                />
                <View className="rounded-[14px] bg-[#FDECEC] px-5 py-3">
                  <Text className="font-poppins-semibold text-[20px] text-semantic-error">
                    你好!
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleGetStarted}
            className="mx-5 mb-5 mt-4 h-[68px] flex-row items-center justify-center gap-3 rounded-[20px] bg-primary-purple"
          >
            <Text className="font-poppins-bold text-[20px] text-text-on-accent">
              Get Started
            </Text>
            <View style={styles.chevron} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    flexGrow: 1,
  },
  logoImage: {
    width: 48,
    height: 48,
  },
  mascotImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  helloBubble: {
    transform: [{ rotate: "-3deg" }],
  },
  holaBubble: {
    transform: [{ rotate: "-4deg" }],
  },
  nihaoBubble: {
    transform: [{ rotate: "-5deg" }],
  },
  bubbleTail: {
    position: "absolute",
    left: -6,
    bottom: -8,
    width: 0,
    height: 0,
    borderLeftWidth: 7,
    borderRightWidth: 7,
    borderTopWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    transform: [{ rotate: "45deg" }],
  },
  chevron: {
    width: 12,
    height: 12,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: "#FFFFFF",
    transform: [{ rotate: "45deg" }],
  },
});
