import { Stack } from "expo-router";

/**
 * The Learn tab owns a small stack so lesson screens can be pushed
 * on top of the lesson list without leaving the tab bar.
 */
export default function LearnStackLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
