import { useState } from "react";
import { Redirect, router, Stack } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useAuth, useSignUp } from "@clerk/expo";
import { AuthMascot } from "@/components/auth/AuthMascot";
import { AuthTextInput } from "@/components/auth/AuthTextInput";
import { SocialAuthButtons } from "@/components/auth/SocialAuthButtons";
import { VerificationModal } from "@/components/auth/VerificationModal";
import { useSocialAuth } from "@/hooks/useSocialAuth";
import { getErrorMessage } from "@/lib/clerk";
import { isValidEmail } from "@/lib/validation";

export default function SignUpScreen() {
  const { isLoaded, isSignedIn } = useAuth();
  const { signUp } = useSignUp();
  const { signInWith, error: socialError } = useSocialAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [verificationVisible, setVerificationVisible] = useState(false);

  const canContinue =
    isValidEmail(email) && password.trim().length > 0 && !submitting;

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/onboarding");
    }
  };

  const handleSignUp = async () => {
    if (!canContinue) return;

    setError(null);
    setSubmitting(true);

    try {
      const { error: passwordError } = await signUp.password({
        emailAddress: email.trim(),
        password,
      });

      if (passwordError) {
        setError(getErrorMessage(passwordError));
        return;
      }

      const { error: sendError } = await signUp.verifications.sendEmailCode();

      if (sendError) {
        setError(getErrorMessage(sendError));
        return;
      }

      setVerificationVisible(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleVerify = async (code: string): Promise<string | null> => {
    const { error: verifyError } = await signUp.verifications.verifyEmailCode({
      code,
    });

    if (verifyError) return getErrorMessage(verifyError);

    const { error: finalizeError } = await signUp.finalize();

    if (finalizeError) return getErrorMessage(finalizeError);

    setVerificationVisible(false);
    router.dismissTo("/");

    return null;
  };

  if (isLoaded && isSignedIn) {
    return <Redirect href="/" />;
  }

  const displayError = error ?? socialError;

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
              onChangeText={(text) => {
                setEmail(text);
                setError(null);
              }}
              keyboardType="email-address"
            />
            <AuthTextInput
              label="Password"
              placeholder="●●●●●●●●"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setError(null);
              }}
              isPassword
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            disabled={!canContinue}
            onPress={handleSignUp}
            className={`mt-4 h-[60px] items-center justify-center rounded-[16px] bg-primary-purple ${
              canContinue ? "" : "opacity-50"
            }`}
          >
            <Text className="font-poppins-semibold text-[17px] text-text-on-accent">
              Sign Up
            </Text>
          </TouchableOpacity>

          <View nativeID="clerk-captcha" />

          {displayError ? (
            <Text className="mt-3 text-center font-poppins-regular text-[14px] leading-[20px] text-semantic-error">
              {displayError}
            </Text>
          ) : null}

          <View className="mt-5 flex-row items-center gap-4">
            <View className="h-px flex-1 bg-border-default" />
            <Text className="font-poppins-regular text-[16px] text-text-secondary">
              or continue with
            </Text>
            <View className="h-px flex-1 bg-border-default" />
          </View>

          <SocialAuthButtons onPress={signInWith} />

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
        onVerify={handleVerify}
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
