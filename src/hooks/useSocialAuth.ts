import { useState } from "react";
import { useSSO } from "@clerk/expo";
import { router } from "expo-router";
import { getErrorMessage } from "@/lib/clerk";
import { posthog } from "@/lib/posthog";

type SocialProvider = "google" | "facebook" | "apple";

type SocialStrategy = "oauth_google" | "oauth_facebook" | "oauth_apple";

const strategies: Record<SocialProvider, SocialStrategy> = {
  google: "oauth_google",
  facebook: "oauth_facebook",
  apple: "oauth_apple",
};

export function useSocialAuth() {
  const { startSSOFlow } = useSSO();
  const [error, setError] = useState<string | null>(null);

  const signInWith = async (provider: SocialProvider) => {
    setError(null);

    try {
      posthog?.capture("social_auth_started", { provider });

      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: strategies[provider],
      });

      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        router.dismissTo("/");
      } else if (!createdSessionId) {
        // Sign-up may require additional fields
        setError("Additional information required. Feature coming soon.");
      }
    } catch (err) {
      setError(getErrorMessage(err));
    }
  };

  return { signInWith, error };
}
