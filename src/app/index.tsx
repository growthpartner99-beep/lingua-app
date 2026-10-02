import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import { useAuth } from "@clerk/expo";
import { useLanguageStore } from "@/store/language";

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();
  const hasHydrated = useLanguageStore((state) => state._hasHydrated);
  const hasSelectedLanguage = useLanguageStore(
    (state) => state.hasSelectedLanguage
  );

  if (!isLoaded) {
    return (
      <View style={styles.container}>
        <Text className="font-poppins-medium text-[16px] text-text-primary">
          Loading...
        </Text>
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  if (hasHydrated && !hasSelectedLanguage) {
    return <Redirect href="/language-selection" />;
  }

  return <Redirect href="/home" />;
}

const styles = {
  container: {
    flex: 1,
    alignItems: "center" as const,
    justifyContent: "center" as const,
  },
};
