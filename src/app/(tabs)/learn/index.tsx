import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LessonCard } from "@/components/learn/LessonCard";
import { UnitHero } from "@/components/learn/UnitHero";
import { UnitPickerModal } from "@/components/learn/UnitPickerModal";
import { getLessonsByLanguage, getLessonsByUnit } from "@/data/lessons";
import { getUnitsByLanguage } from "@/data/units";
import { posthog } from "@/lib/posthog";
import { colors } from "@/theme/tokens/colors";
import { useLanguageStore } from "@/store/language";
import { useProgressStore } from "@/store/progress";
import type { LessonStatus } from "@/types/learning";

type LearnTab = "lessons" | "practice";

export default function LearnScreen() {
  const languageId = useLanguageStore((state) => state.selectedLanguage);
  const completedLessonIds = useProgressStore(
    (state) => state.completedLessonIds
  );

  const [tab, setTab] = useState<LearnTab>("lessons");
  const [unitOverride, setUnitOverride] = useState<string | null>(null);
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const units = getUnitsByLanguage(languageId);
  const languageLessons = getLessonsByLanguage(languageId);

  const currentLesson =
    languageLessons.find(
      (lesson) => !completedLessonIds.includes(lesson.id)
    ) ?? languageLessons[languageLessons.length - 1];

  const preferredUnitId = currentLesson?.unitId ?? units[0]?.id ?? "";
  const unit =
    units.find(
      (candidate) => candidate.id === (unitOverride ?? preferredUnitId)
    ) ?? units[0];

  const lessons = useMemo(
    () => (unit ? getLessonsByUnit(unit.id) : []),
    [unit]
  );

  const statusById = useMemo(() => {
    const map: Record<string, LessonStatus> = {};
    let hasCurrentLesson = false;

    for (const lesson of lessons) {
      if (completedLessonIds.includes(lesson.id)) {
        map[lesson.id] = "completed";
      } else if (!hasCurrentLesson) {
        map[lesson.id] = "in_progress";
        hasCurrentLesson = true;
      } else {
        map[lesson.id] = "locked";
      }
    }

    return map;
  }, [completedLessonIds, lessons]);

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push("/home");
    }
  };

  const handleSwitchUnit = () => {
    setIsPickerOpen(true);
  };

  const handleSelectUnit = (unitId: string) => {
    setUnitOverride(unitId);
    setTab("lessons");
  };

  const handleOpenLesson = (lessonId: string) => {
    posthog?.capture("lesson_opened", {
      lesson_id: lessonId,
      unit_id: unit?.id,
      language_id: languageId,
    });
    router.push({ pathname: "/learn/[lessonId]", params: { lessonId } });
  };

  if (!unit) {
    return (
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        <View className="flex-1 items-center justify-center px-10">
          <View className="h-20 w-20 items-center justify-center rounded-[28px] bg-[#F4F1FE]">
            <Feather name="map" size={36} color={colors.primary.purple} />
          </View>
          <Text className="mt-6 font-poppins-semibold text-[22px] text-text-primary">
            No units yet
          </Text>
          <Text className="mt-2 text-center font-poppins-regular text-[14px] leading-[22px] text-text-secondary">
            Pick another language to start learning.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const reachedCount = lessons.filter(
    (lesson) => statusById[lesson.id] !== "locked"
  ).length;
  const subtitle = `Unit ${unit.order} • ${reachedCount} / ${lessons.length} lessons`;

  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <UnitHero
          onBack={handleBack}
          onSwitchUnit={handleSwitchUnit}
          subtitle={subtitle}
          unit={unit}
        />

        <View style={styles.tabs}>
          <View style={styles.track}>
            <Pressable
              accessibilityRole="tab"
              onPress={() => setTab("lessons")}
              style={[styles.segment, tab === "lessons" && styles.segmentActive]}
            >
              <Text
                style={[
                  styles.segmentLabel,
                  tab === "lessons" && styles.segmentLabelActive,
                ]}
              >
                Lessons
              </Text>
              {tab === "lessons" && <View style={styles.segmentIndicator} />}
            </Pressable>

            <Pressable
              accessibilityRole="tab"
              onPress={() => setTab("practice")}
              style={[styles.segment, tab === "practice" && styles.segmentActive]}
            >
              <Text
                style={[
                  styles.segmentLabel,
                  tab === "practice" && styles.segmentLabelActive,
                ]}
              >
                Practice
              </Text>
              {tab === "practice" && <View style={styles.segmentIndicator} />}
            </Pressable>
          </View>
        </View>

        {tab === "lessons" ? (
          <View style={styles.list}>
            {lessons.map((lesson, index) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                number={index + 1}
                onPress={() => handleOpenLesson(lesson.id)}
                status={statusById[lesson.id] ?? "locked"}
              />
            ))}
          </View>
        ) : (
          <View className="items-center px-10 pb-10 pt-14">
            <View className="h-16 w-16 items-center justify-center rounded-[24px] bg-[#F4F1FE]">
              <Feather name="target" size={28} color={colors.primary.purple} />
            </View>
            <Text className="mt-4 font-poppins-semibold text-[17px] text-text-primary">
              Practice is on the way
            </Text>
            <Text className="mt-1 text-center font-poppins-regular text-[14px] leading-[21px] text-text-secondary">
              Quick review sessions for {unit.title} will show up here.
            </Text>
          </View>
        )}
      </ScrollView>

      <UnitPickerModal
        onClose={() => setIsPickerOpen(false)}
        onSelect={handleSelectUnit}
        selectedUnitId={unit.id}
        units={units}
        visible={isPickerOpen}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.neutral.background,
  },
  content: {
    paddingBottom: 120,
  },
  tabs: {
    marginTop: -11,
    marginHorizontal: 20,
    zIndex: 10,
  },
  track: {
    flexDirection: "row",
    borderRadius: 20,
    padding: 6,
    backgroundColor: "#F1F2F6",
  },
  segment: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 16,
  },
  segmentActive: {
    backgroundColor: colors.neutral.background,
    shadowColor: colors.neutral.textPrimary,
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  segmentLabel: {
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    color: colors.text.secondary,
  },
  segmentLabelActive: {
    fontFamily: "Poppins-SemiBold",
    color: colors.primary.purple,
  },
  segmentIndicator: {
    position: "absolute",
    bottom: 4,
    left: 16,
    right: 16,
    height: 3,
    borderRadius: 2,
    backgroundColor: colors.primary.purple,
  },
  list: {
    paddingHorizontal: 20,
    paddingTop: 22,
    gap: 12,
  },
});
