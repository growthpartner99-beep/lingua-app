import { useState } from "react";
import { useSSO } from "@clerk/expo";
import { router } from "expo-router";
import { getErrorMessage } from "@/lib/clerk";

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
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: strategies[provider],
      });

      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        router.dismissTo("/");
      }
    } catch (err) {
      setError(getErrorMessage(err));
    }
  };

  return { signInWith, error };
}
