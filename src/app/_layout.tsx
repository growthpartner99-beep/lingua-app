import { Stack } from "expo-router";
import { FontLoader } from "@/components/providers/FontLoader";
import "@/globals.css";

export default function RootLayout() {
  return (
    <FontLoader>
      <Stack />
    </FontLoader>
  );
}