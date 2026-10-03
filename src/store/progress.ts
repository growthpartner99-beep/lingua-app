import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { stateStorage } from "@/lib/storage";

export type PlanItemId = "lesson" | "conversation" | "words";

function getTodayKey() {
  return new Date().toISOString().split("T")[0];
}

const INITIAL_COMPLETED_LESSONS = [
  "es-u1-l1",
  "es-u1-l2",
  "fr-u1-l1",
  "fr-u1-l2",
  "ja-u1-l1",
  "ja-u1-l2",
];

interface ProgressState {
  dailyXp: number;
  dailyGoalXp: number;
  streak: number;
  completedPlanIds: PlanItemId[];
  completedLessonIds: string[];
  lastActiveDay: string;
  togglePlanItem: (id: PlanItemId) => void;
  completeLesson: (lessonId: string, xp: number) => void;
  checkAndResetDay: () => void;
  _hasHydrated: boolean;
  _setHasHydrated: (hasHydrated: boolean) => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      dailyXp: 0,
      dailyGoalXp: 20,
      streak: 0,
      completedPlanIds: [],
      completedLessonIds: INITIAL_COMPLETED_LESSONS,
      lastActiveDay: getTodayKey(),
      togglePlanItem: (id) =>
        set((state) => {
          const today = getTodayKey();
          if (state.lastActiveDay !== today) {
            return {
              completedPlanIds: [id],
              dailyXp: 0,
              lastActiveDay: today,
            };
          }
          return {
            completedPlanIds: state.completedPlanIds.includes(id)
              ? state.completedPlanIds.filter((planId) => planId !== id)
              : [...state.completedPlanIds, id],
          };
        }),
      completeLesson: (lessonId, xp) =>
        set((state) => {
          const today = getTodayKey();
          const isNewLesson = !state.completedLessonIds.includes(lessonId);
          const baseState = state.lastActiveDay !== today
            ? { dailyXp: 0, completedPlanIds: [], lastActiveDay: today }
            : {};
          const currentDailyXp = baseState.dailyXp ?? state.dailyXp;
          return {
            ...baseState,
            completedLessonIds: isNewLesson
              ? [...state.completedLessonIds, lessonId]
              : state.completedLessonIds,
            dailyXp: isNewLesson ? currentDailyXp + xp : currentDailyXp,
          };
        }),
      checkAndResetDay: () =>
        set((state) => {
          const today = getTodayKey();
          if (state.lastActiveDay !== today) {
            return {
              dailyXp: 0,
              completedPlanIds: [],
              lastActiveDay: today,
            };
          }
          return {};
        }),
      _hasHydrated: false,
      _setHasHydrated: (hasHydrated) => set({ _hasHydrated: hasHydrated }),
    }),
    {
      name: "progress-storage",
      storage: createJSONStorage(() => stateStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          const today = getTodayKey();
          if (state.lastActiveDay !== today) {
            state.dailyXp = 0;
            state.completedPlanIds = [];
            state.lastActiveDay = today;
          }
          state._setHasHydrated(true);
        }
      },
    }
  )
);
