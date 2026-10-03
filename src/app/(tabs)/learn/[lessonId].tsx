import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AITeacherContextCard } from "@/components/lesson/AITeacherContextCard";
import { LessonFeedbackCard } from "@/components/lesson/LessonFeedbackCard";
import { LessonGoalCard } from "@/components/lesson/LessonGoalCard";
import { LessonPhrasesCard } from "@/components/lesson/LessonPhrasesCard";
import { LessonStage } from "@/components/lesson/LessonStage";
import { getLanguageById } from "@/data/languages";
import { getLessonById, getLessonPhrases } from "@/data/lessons";
import { posthog } from "@/lib/posthog";
import { useProgressStore } from "@/store/progress";
import { colors } from "@/theme/tokens/colors";

/**
 * Audio lesson screen: a call-style session with the AI teacher.
 * Opened from the Learn tab with a lessonId, it shows the call stage
 * with the speaking feedback, then the lesson language, title, goals,
 * key phrases and AI teacher context from the hardcoded data. Ending
 * the call awards the lesson XP.
 */
export default function AudioLessonScreen() {
  const { lessonId } = useLocalSearchParams<{ lessonId: string }>();
  const lesson = getLessonById(lessonId ?? "");
  const language = lesson ? getLanguageById(lesson.languageId) : undefined;
  const phrases = useMemo(
    () => (lesson ? getLessonPhrases(lesson) : []),
    [lesson]
  );
  const completeLesson = useProgressStore((state) => state.completeLesson);

  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [seenLessonId, setSeenLessonId] = useState(lessonId);

  if (seenLessonId !== lessonId) {
    setSeenLessonId(lessonId);
    setPhraseIndex(0);
  }

  useEffect(() => {
    posthog?.capture("audio_lesson_started", {
      lesson_id: lesson?.id ?? lessonId,
      language_id: lesson?.languageId ?? null,
    });
  }, [lesson, lessonId]);

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/learn");
    }
  };

  if (!lesson || !language) {
    return (
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        <View className="flex-1 items-center justify-center px-10">
          <View className="h-16 w-16 items-center justify-center rounded-[24px] bg-[#F4F1FE]">
            <Feather
              color={colors.primary.purple}
              name="alert-circle"
              size={28}
            />
          </View>
          <Text className="mt-4 font-poppins-semibold text-[17px] text-text-primary">
            Lesson not found
          </Text>
          <Pressable
            className="mt-5 rounded-2xl bg-[#6C4EF5] px-6 py-3"
            onPress={handleBack}
          >
            <Text className="font-poppins-semibold text-[15px] text-white">
              Back to lessons
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  const handleEndCall = () => {
    posthog?.capture("audio_lesson_completed", {
      lesson_id: lesson.id,
      language_id: lesson.languageId,
      xp: lesson.xp,
    });
    completeLesson(lesson.id, lesson.xp);
    handleBack();
  };

  const handleReplayPhrase = () => {
    if (phrases.length < 2) return;
    setPhraseIndex((current) => (current + 1) % phrases.length);
  };

  const phrase = phrases.length > 0 ? phrases[phraseIndex % phrases.length] : null;

  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <View className="flex-row items-center bg-white pb-4 pl-3 pr-3 pt-1">
        <Pressable hitSlop={10} onPress={handleBack}>
          <Feather color={colors.text.primary} name="chevron-left" size={30} />
        </Pressable>

        <View className="ml-2 flex-1">
          <Text className="font-poppins-semibold text-[20px] text-text-primary">
            AI Teacher
          </Text>
          <View className="mt-0.5 flex-row items-center gap-1.5">
            <View className="h-[11px] w-[11px] rounded-full bg-[#6CCD3F]" />
            <Text className="font-poppins-regular text-[14px] text-[#8F94AE]">
              Online
            </Text>
          </View>
        </View>

        <View className="flex-row items-center gap-2.5">
          <Pressable
            accessibilityLabel="Toggle camera"
            accessibilityRole="button"
            className="h-[34px] w-[34px] items-center justify-center rounded-full border-[1.5px] border-border-default bg-white"
            onPress={() => setIsCameraOn((value) => !value)}
          >
            <Feather
              color={colors.text.primary}
              name={isCameraOn ? "video" : "video-off"}
              size={21}
            />
          </Pressable>

          <View className="h-[34px] w-[34px] items-center justify-center rounded-full border-[1.5px] border-border-default bg-white">
            <Text className="font-poppins-semibold text-[15px] text-text-primary">
              {lesson.xp}
            </Text>
          </View>

          <View className="h-[34px] w-[34px] items-center justify-center rounded-full border-[1.5px] border-border-default bg-white">
            <Feather color={colors.text.primary} name="bell" size={21} />
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View className="pb-5 pt-2.5">
          <LessonStage
            isCameraOn={isCameraOn}
            isMicOn={isMicOn}
            onEndCall={handleEndCall}
            onReplayPhrase={handleReplayPhrase}
            onToggleCamera={() => setIsCameraOn((value) => !value)}
            onToggleMic={() => setIsMicOn((value) => !value)}
            onToggleSubtitles={() => setShowSubtitles((value) => !value)}
            phrase={phrase}
            showSubtitles={showSubtitles}
          />
        </View>

        <LessonFeedbackCard />
        <LessonGoalCard lesson={lesson} language={language} />
        <LessonPhrasesCard phrases={phrases} />
        <AITeacherContextCard prompt={lesson.aiTeacherPrompt} />
      </ScrollView>
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
    backgroundColor: "#F4F3F6",
  },
});
