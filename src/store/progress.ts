import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { stateStorage } from "@/lib/storage";

export type PlanItemId = "lesson" | "conversation" | "words";

interface ProgressState {
  dailyXp: number;
  dailyGoalXp: number;
  streak: number;
  completedPlanIds: PlanItemId[];
  completedLessonIds: string[];
  togglePlanItem: (id: PlanItemId) => void;
  completeLesson: (lessonId: string, xp: number) => void;
  _hasHydrated: boolean;
  _setHasHydrated: (hasHydrated: boolean) => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      dailyXp: 15,
      dailyGoalXp: 20,
      streak: 12,
      completedPlanIds: ["lesson"],
      completedLessonIds: ["es-u1-l1", "es-u1-l2"],
      togglePlanItem: (id) =>
        set((state) => ({
          completedPlanIds: state.completedPlanIds.includes(id)
            ? state.completedPlanIds.filter((planId) => planId !== id)
            : [...state.completedPlanIds, id],
        })),
      completeLesson: (lessonId, xp) =>
        set((state) => ({
          completedLessonIds: state.completedLessonIds.includes(lessonId)
            ? state.completedLessonIds
            : [...state.completedLessonIds, lessonId],
          dailyXp: state.dailyXp + xp,
        })),
      _hasHydrated: false,
      _setHasHydrated: (hasHydrated) => set({ _hasHydrated: hasHydrated }),
    }),
    {
      name: "progress-storage",
      storage: createJSONStorage(() => stateStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state._setHasHydrated(true);
        }
      },
    }
  )
);
