import { useState } from "react";
import { router, Stack } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { AuthMascot } from "@/components/auth/AuthMascot";
import { AuthTextInput } from "@/components/auth/AuthTextInput";
import { SocialAuthButtons } from "@/components/auth/SocialAuthButtons";
import { VerificationModal } from "@/components/auth/VerificationModal";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationVisible, setVerificationVisible] = useState(false);

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

      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContent}
      >
        <View className="px-6">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleBack}
            className="-ml-2.5 mt-1 h-10 w-10 items-center justify-center"
          >
            <Feather name="chevron-left" size={32} color="#0D132B" />
          </TouchableOpacity>

          <Text className="mt-5 font-poppins-bold text-[30px] leading-[38px] text-text-primary">
            Create your account
          </Text>

          <Text className="mt-4 font-poppins-regular text-[17px] leading-[26px] text-text-secondary">
            Start your language journey today ✨
          </Text>
        </View>

        <AuthMascot />

        <View className="flex-1 px-6">
          <View className="gap-4">
            <AuthTextInput
              label="Email"
              placeholder="alex@gmail.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <AuthTextInput
              label="Password"
              placeholder="●●●●●●●●"
              value={password}
              onChangeText={setPassword}
              isPassword
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => setVerificationVisible(true)}
            className="mt-4 h-[60px] items-center justify-center rounded-[16px] bg-primary-purple"
          >
            <Text className="font-poppins-semibold text-[17px] text-text-on-accent">
              Sign Up
            </Text>
          </TouchableOpacity>

          <View className="mt-5 flex-row items-center gap-4">
            <View className="h-px flex-1 bg-border-default" />
            <Text className="font-poppins-regular text-[16px] text-text-secondary">
              or continue with
            </Text>
            <View className="h-px flex-1 bg-border-default" />
          </View>

          <SocialAuthButtons />

          <Text className="mt-[75px] text-center font-poppins-regular text-[16px] text-text-secondary">
            Already have an account?{" "}
            <Text
              onPress={() => router.push("/sign-in")}
              className="font-poppins-semibold text-primary-purple"
            >
              Log in
            </Text>
          </Text>
        </View>
      </ScrollView>

      <VerificationModal
        visible={verificationVisible}
        email={email.trim()}
        onClose={() => setVerificationVisible(false)}
        onVerified={() => router.dismissTo("/")}
      />
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
    paddingBottom: 40,
  },
});
