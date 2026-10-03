import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { stateStorage } from "@/lib/storage";
import type { LanguageId } from "@/types/learning";

interface LanguageState {
  selectedLanguage: LanguageId;
  hasSelectedLanguage: boolean;
  setSelectedLanguage: (languageId: LanguageId) => void;
  clearLanguageSelection: () => void;
  _hasHydrated: boolean;
  _setHasHydrated: (hasHydrated: boolean) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguage: "es",
      hasSelectedLanguage: false,
      setSelectedLanguage: (languageId) =>
        set({ selectedLanguage: languageId, hasSelectedLanguage: true }),
      clearLanguageSelection: () =>
        set({ selectedLanguage: "es", hasSelectedLanguage: false }),
      _hasHydrated: false,
      _setHasHydrated: (hasHydrated) => set({ _hasHydrated: hasHydrated }),
    }),
    {
      name: "language-storage",
      storage: createJSONStorage(() => stateStorage),
      partialize: (state) => ({
        selectedLanguage: state.selectedLanguage,
        hasSelectedLanguage: state.hasSelectedLanguage,
      }),
      onRehydrateStorage: () => (state, error) => {
        if (error) {
          useLanguageStore.setState({ _hasHydrated: true });
          return;
        }
        if (state) {
          const hasLanguage = typeof state.selectedLanguage === "string" && state.selectedLanguage.length > 0;
          const legacyHasSelectedLanguage = state.hasSelectedLanguage === false && hasLanguage;
          state._setHasHydrated(true);
          if (legacyHasSelectedLanguage) {
            state.hasSelectedLanguage = true;
          }
        } else {
          useLanguageStore.setState({ _hasHydrated: true });
        }
      },
    }
  )
);