import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "@clerk/expo";
import { useHomeData } from "@/hooks/useHomeData";
import { useProgressStore } from "@/store/progress";
import { HomeHeader } from "@/components/home/HomeHeader";
import { DailyGoalCard } from "@/components/home/DailyGoalCard";
import { ContinueLearningCard } from "@/components/home/ContinueLearningCard";
import { TodaysPlan } from "@/components/home/TodaysPlan";
import { NextUpCard } from "@/components/home/NextUpCard";

export default function HomeScreen() {
  const { user } = useUser();
  const {
    language,
    currentUnit,
    level,
    dailyXp,
    dailyGoalXp,
    streak,
    plan,
  } = useHomeData();
  const togglePlanItem = useProgressStore((state) => state.togglePlanItem);

  const name =
    user?.firstName || user?.username || user?.fullName || "friend";

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader language={language} name={name} streak={streak} />

        <View style={styles.body}>
          <DailyGoalCard xp={dailyXp} goal={dailyGoalXp} />
          <ContinueLearningCard
            language={language}
            unit={currentUnit}
            level={level}
          />
          <TodaysPlan items={plan} onToggle={togglePlanItem} />
          <NextUpCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    paddingBottom: 120,
  },
  body: {
    paddingHorizontal: 24,
  },
});
