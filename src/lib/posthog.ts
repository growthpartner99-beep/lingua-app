import Constants from "expo-constants";
import PostHog from "posthog-react-native";

const extra = Constants.expoConfig?.extra;
const projectToken = extra?.posthogProjectToken as string | undefined;
const host = extra?.posthogHost as string | undefined;

if ((!projectToken || !host) && __DEV__) {
  const missingVariable = projectToken ? "POSTHOG_HOST" : "POSTHOG_PROJECT_TOKEN";
  console.warn(
    `[PostHog] ${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This warning stops appearing once ${missingVariable} is configured`,
  );
}

export const posthog =
  projectToken && host
    ? new PostHog(projectToken, {
        host,
        captureAppLifecycleEvents: true,
        logs: {
          serviceName: "duolingo-clone",
          environment: __DEV__ ? "development" : "production",
        },
        errorTracking: {
          autocapture: {
            uncaughtExceptions: true,
            unhandledRejections: true,
          },
        },
      })
    : undefined;

export const posthogLogger = {
  info(message: string, attributes?: Record<string, string | number | boolean>) {
    posthog?.logger.info(message, attributes);
  },
};
