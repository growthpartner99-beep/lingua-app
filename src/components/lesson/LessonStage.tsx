import { MaterialIcons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";
import { images } from "@/constants/images";
import { colors } from "@/theme/tokens/colors";
import type { Phrase } from "@/types/learning";

type LessonStageProps = {
  phrase: Phrase | null;
  isCameraOn: boolean;
  isMicOn: boolean;
  showSubtitles: boolean;
  onToggleCamera: () => void;
  onToggleMic: () => void;
  onToggleSubtitles: () => void;
  onEndCall: () => void;
  onReplayPhrase: () => void;
};

type ControlButtonProps = {
  label: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  tone?: "default" | "muted" | "danger";
  onPress: () => void;
};

function ControlButton({
  label,
  icon,
  tone = "default",
  onPress,
}: ControlButtonProps) {
  const isDanger = tone === "danger";
  const isMuted = tone === "muted";

  const circleClass = isDanger
    ? "bg-[#EE4B3C]"
    : isMuted
      ? "bg-[#0D132B]/75"
      : "bg-white";

  const iconColor = isDanger
    ? "#FFFFFF"
    : isMuted
      ? "rgba(255,255,255,0.7)"
      : colors.text.primary;

  return (
    <Pressable
      accessibilityLabel={label}
      accessibilityRole="button"
      className="items-center"
      onPress={onPress}
    >
      <View
        className={`h-[58px] w-[58px] items-center justify-center rounded-full ${circleClass}`}
      >
        <MaterialIcons color={iconColor} name={icon} size={28} />
      </View>
      <Text className="mt-1.5 font-poppins-medium text-[13px] leading-[17px] text-white/95">
        {label}
      </Text>
    </Pressable>
  );
}

/**
 * Soft, blurred-looking classroom backdrop. There is no room photo in
 * the asset library, so the scene is a gradient wall / floor with a
 * few simple props (frames, shelf, desk) in the same warm tones as
 * the design.
 */
function RoomBackdrop() {
  return (
    <>
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
        <Defs>
          <LinearGradient id="roomWall" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#C1B7AC" />
            <Stop offset="0.32" stopColor="#B7AA9C" />
            <Stop offset="0.58" stopColor="#AD9E90" />
            <Stop offset="0.76" stopColor="#A99B92" />
            <Stop offset="0.9" stopColor="#B4AEAC" />
            <Stop offset="1" stopColor="#C0BBBC" />
          </LinearGradient>
        </Defs>
        <Rect height="100%" width="100%" fill="url(#roomWall)" />
      </Svg>

      <View className="absolute left-[41%] right-0 top-0 h-[26px] bg-[#A08D75]" />

      <View className="absolute left-0 top-[6px] h-[88px] w-[92px] bg-white/85 p-1.5">
        <View className="h-full w-full bg-[#DCE6EE]" />
        <View className="absolute left-4 top-5 h-7 w-9 bg-white/60" />
      </View>

      <View className="absolute left-0 top-[104px] h-[72px] w-[50px] items-center justify-center bg-white/85">
        <View className="h-[22px] w-[22px] rounded-full bg-[#F0D79A]" />
        <View className="mt-2 h-[7px] w-[26px] bg-[#CBD7DC]" />
      </View>

      <View className="absolute right-0 top-[150px] h-[118px] w-[44px] rounded-l-[24px] bg-[#8A9A78]/70" />
      <View className="absolute right-0 top-[268px] h-[8px] w-[124px] bg-[#C7B69E]/80" />
      <View className="absolute right-0 top-[344px] h-[8px] w-[124px] bg-[#C7B69E]/80" />

      <View className="absolute left-0 top-[62%] h-[124px] w-[118px] bg-[#A98C64]/75">
        <View className="h-[10px] w-full bg-[#C6A87F]" />
      </View>
    </>
  );
}

/**
 * The audio lesson stage: classroom backdrop, self view, AI teacher
 * mascot, the teacher's response bubble and the four call controls.
 * Audio only — the camera tile is a decorative preview. The stage has
 * a fixed height so it always matches the design, and the lesson
 * details below it scroll.
 */
export function LessonStage({
  phrase,
  isCameraOn,
  isMicOn,
  showSubtitles,
  onToggleCamera,
  onToggleMic,
  onToggleSubtitles,
  onEndCall,
  onReplayPhrase,
}: LessonStageProps) {
  return (
    <View className="mx-[10px] overflow-hidden rounded-[20px]" style={styles.stage}>
      <RoomBackdrop />

      <Image
        resizeMode="contain"
        source={images.mascotWelcome}
        style={styles.mascot}
      />

      {isCameraOn && (
        <View className="absolute right-[5px] top-3 h-[141px] w-[100px] overflow-hidden rounded-[14px] border-[3px] border-white bg-[#0D132B]">
          <Image
            resizeMode="cover"
            source={images.aiTutor}
            style={styles.selfView}
          />
        </View>
      )}

      <View className="absolute bottom-0 left-0 right-0 pb-4">
        {showSubtitles && phrase ? (
          <Pressable accessibilityRole="button" onPress={onReplayPhrase}>
            <View className="relative mx-[61px] mb-6 rounded-[20px] bg-white px-[17px] py-[14px]">
              <View className="flex-row items-center">
                <View className="flex-1 pr-3">
                  <Text className="font-poppins-semibold text-[20px] leading-[30px] text-text-primary">
                    {phrase.phrase}
                  </Text>
                  <Text className="font-poppins-semibold text-[20px] leading-[30px] text-text-primary">
                    {phrase.translation}
                  </Text>
                </View>
                <MaterialIcons
                  color={colors.primary.purple}
                  name="volume-up"
                  size={26}
                />
              </View>
              <View style={styles.tail} />
            </View>
          </Pressable>
        ) : (
          <View className="mb-6" />
        )}

        <View className="flex-row items-start justify-between pl-5 pr-6">
          <ControlButton
            icon={isCameraOn ? "videocam" : "videocam-off"}
            label="Camera"
            onPress={onToggleCamera}
            tone={isCameraOn ? "default" : "muted"}
          />
          <ControlButton
            icon={isMicOn ? "mic" : "mic-off"}
            label="Mic"
            onPress={onToggleMic}
            tone={isMicOn ? "default" : "muted"}
          />
          <ControlButton
            icon="translate"
            label="Subtitles"
            onPress={onToggleSubtitles}
            tone={showSubtitles ? "default" : "muted"}
          />
          <ControlButton
            icon="call-end"
            label="End Call"
            onPress={onEndCall}
            tone="danger"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stage: {
    height: 500,
  },
  mascot: {
    position: "absolute",
    left: -70,
    top: -20,
    width: 430,
    height: 430,
  },
  selfView: {
    width: "100%",
    height: "100%",
  },
  tail: {
    position: "absolute",
    bottom: -25,
    right: 6,
    width: 0,
    height: 0,
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderTopWidth: 26,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#FFFFFF",
  },
});
