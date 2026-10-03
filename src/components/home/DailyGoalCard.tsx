import { Image, StyleSheet, Text, View } from "react-native";
import { images } from "@/constants/images";

type DailyGoalCardProps = {
  xp: number;
  goal: number;
};

export function DailyGoalCard({ xp, goal }: DailyGoalCardProps) {
  const progress = goal > 0 ? Math.min(xp / goal, 1) : 0;

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text className="font-poppins-semibold text-[16px] text-text-primary">
          Daily goal
        </Text>

        <View className="mt-1.5 flex-row items-baseline">
          <Text className="font-poppins-bold text-[30px] leading-[36px] text-text-primary">
            {xp}
          </Text>
          <Text className="ml-2 font-poppins-medium text-[16px] text-[#9CA3AF]">
            / {goal} XP
          </Text>
        </View>

        <View style={styles.track}>
          <View style={[styles.fill, { width: `${progress * 100}%` }]} />
        </View>
      </View>

      <Image
        source={images.treasure}
        resizeMode="contain"
        style={styles.chest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "relative",
    marginTop: 24,
    overflow: "hidden",
    borderRadius: 20,
    backgroundColor: "#FDF2E9",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 20,
  },
  content: {
    paddingRight: 88,
  },
  track: {
    marginTop: 12,
    height: 10,
    width: "100%",
    overflow: "hidden",
    borderRadius: 999,
    backgroundColor: "#FBE4D2",
  },
  fill: {
    height: "100%",
    borderRadius: 999,
    backgroundColor: "#FF8A00",
  },
  chest: {
    position: "absolute",
    right: 24,
    top: "50%",
    width: 82,
    height: 82,
    marginTop: -41,
  },
});
