import { View } from "react-native";
import type { Language } from "@/types/learning";

type LanguageFlagProps = {
  language: Language;
  size?: number;
};

/**
 * Flag emojis do not render on Android or on web, so each flag is
 * drawn with plain views to match the circular flags in the design.
 */
export function LanguageFlag({ language, size = 36 }: LanguageFlagProps) {
  const frame = {
    width: size,
    height: size,
    borderRadius: size / 2,
    overflow: "hidden" as const,
  };

  if (language.id === "es") {
    return (
      <View style={frame}>
        <View style={{ height: "25%", backgroundColor: "#C60B1E" }} />
        <View style={{ height: "50%", backgroundColor: "#FFC400" }} />
        <View style={{ height: "25%", backgroundColor: "#C60B1E" }} />
      </View>
    );
  }

  if (language.id === "fr") {
    return (
      <View style={[frame, { flexDirection: "row" }]}>
        <View style={{ width: "33.34%", height: "100%", backgroundColor: "#0055A4" }} />
        <View style={{ width: "33.34%", height: "100%", backgroundColor: "#FFFFFF" }} />
        <View style={{ width: "33.33%", height: "100%", backgroundColor: "#EF4135" }} />
      </View>
    );
  }

  return (
    <View
      style={[
        frame,
        {
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
          borderWidth: 1,
          borderColor: "#E5E7EB",
        },
      ]}
    >
      <View
        style={{
          width: size * 0.61,
          height: size * 0.61,
          borderRadius: size * 0.305,
          backgroundColor: "#BC002D",
        }}
      />
    </View>
  );
}
