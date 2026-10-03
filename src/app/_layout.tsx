import { useEffect, useRef } from "react";
import { ClerkProvider, useAuth, useUser } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";
import { Stack } from "expo-router";
import { PostHogProvider, usePostHog } from "posthog-react-native";
import { FontLoader } from "@/components/providers/FontLoader";
import { posthog } from "@/lib/posthog";
import "@/globals.css";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "";

if (!publishableKey) {
  throw new Error("Missing EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY. Add your key to .env.\nRun: 1) clerk auth login  2) clerk link  3) clerk env pull — then restart the dev server.");
}

function PostHogIdentity() {
  const { isLoaded: isAuthLoaded, isSignedIn, userId } = useAuth();
  const { isLoaded: isUserLoaded, user } = useUser();
  const client = usePostHog();
  const previousUserId = useRef<string | null>(null);
  const hasResolvedAuth = useRef(false);

  useEffect(() => {
    if (!isAuthLoaded || (isSignedIn && !isUserLoaded)) return;

    if (isSignedIn && userId && user) {
      if (previousUserId.current !== userId) {
        if (previousUserId.current) client.reset();

        client.identify(userId, {
          $set: {
            ...(user.primaryEmailAddress?.emailAddress
              ? { email: user.primaryEmailAddress.emailAddress }
              : {}),
            ...(user.firstName ? { first_name: user.firstName } : {}),
            ...(user.lastName ? { last_name: user.lastName } : {}),
            ...(user.username ? { username: user.username } : {}),
          },
        });
        previousUserId.current = userId;
      }
      hasResolvedAuth.current = true;
      return;
    }

    // Only reset when we previously identified someone. Resetting on the
    // initial signed-out resolution would discard the anonymous ID for no reason.
    if (previousUserId.current) {
      client.reset();
      previousUserId.current = null;
    }
    hasResolvedAuth.current = true;
  }, [client, isAuthLoaded, isSignedIn, isUserLoaded, user, userId]);

  return null;
}

export default function RootLayout() {
  const content = (
    <FontLoader>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </FontLoader>
  );

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      {posthog ? (
        <PostHogProvider client={posthog}>
          <PostHogIdentity />
          {content}
        </PostHogProvider>
      ) : (
        content
      )}
    </ClerkProvider>
  );
}