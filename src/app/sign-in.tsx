import { router, Stack } from "expo-router";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { SignIn } from "@clerk/expo";
import { AuthMascot } from "@/components/auth/AuthMascot";

export default function SignInScreen() {
  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/onboarding");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      <View className="flex-1 px-6">
        <View className="mt-5 flex-row items-center justify-between">
          <View className="h-10 w-10" />
          <Text className="font-poppins-bold text-[30px] leading-[38px] text-text-primary">
            Welcome back
          </Text>
        </View>

        <Text className="mt-4 font-poppins-regular text-[17px] leading-[26px] text-text-secondary">
          Continue your language journey ✨
        </Text>

        <AuthMascot />

        <View className="flex-1">
          <SignIn
            afterSignInUrl="/"
            signUpUrl="/sign-up"
            appearance={{
              elements: {
                formButtonPrimary: "bg-primary-purple hover:bg-primary-purple/90",
                card: "shadow-none border-none",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                dividerText: "or continue with",
                socialButtonsBlockButton: "border-border-default bg-white",
              },
              variables: {
                colorPrimary: "#7C3AED",
                colorBackground: "#FFFFFF",
                colorInputBackground: "#FFFFFF",
                colorInputText: "#0D132B",
                colorText: "#0D132B",
                colorTextSecondary: "#6B7280",
                colorDanger: "#EF4444",
              },
            }}
          />

          <Text className="mt-8 text-center font-poppins-regular text-[16px] text-text-secondary">
            Don&apos;t have an account?{" "}
            <Text
              onPress={() => router.push("/sign-up")}
              className="font-poppins-semibold text-primary-purple"
            >
              Sign up
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});