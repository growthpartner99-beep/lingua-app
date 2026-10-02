import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text className="font-poppins-medium text-[16px] text-text-primary">
        hello, world!
      </Text>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => router.push("/onboarding")}
        className="mt-4 items-center rounded-2xl bg-primary-purple px-6 py-4"
      >
        <Text className="font-poppins-semibold text-[16px] text-text-on-accent">
          Open onboarding
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
