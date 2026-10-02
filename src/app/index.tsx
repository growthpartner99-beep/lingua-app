import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useUser, useAuth, SignOutButton } from "@clerk/expo";

export default function Index() {
  const { user, isLoaded } = useUser();
  const { isSignedIn } = useAuth();

  if (!isLoaded) {
    return (
      <View style={styles.container}>
        <Text className="font-poppins-medium text-[16px] text-text-primary">
          Loading...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isSignedIn && user ? (
        <>
          <Text className="font-poppins-medium text-[16px] text-text-primary">
            hello, {user.firstName || user.username || "there"}!
          </Text>
          <Text className="mt-2 font-poppins-regular text-[14px] text-text-secondary">
            {user.primaryEmailAddress?.emailAddress}
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
          <SignOutButton
            className="mt-4 items-center rounded-2xl border border-border-default px-6 py-4"
          >
            <Text className="font-poppins-semibold text-[16px] text-text-primary">
              Sign Out
            </Text>
          </SignOutButton>
        </>
      ) : (
        <>
          <Text className="font-poppins-medium text-[16px] text-text-primary">
            hello, world!
          </Text>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => router.push("/sign-in")}
            className="mt-4 items-center rounded-2xl bg-primary-purple px-6 py-4"
          >
            <Text className="font-poppins-semibold text-[16px] text-text-on-accent">
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => router.push("/sign-up")}
            className="mt-4 items-center rounded-2xl border border-border-default px-6 py-4"
          >
            <Text className="font-poppins-semibold text-[16px] text-text-primary">
              Sign Up
            </Text>
          </TouchableOpacity>
        </>
      )}
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