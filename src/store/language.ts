import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state._setHasHydrated(true);
        }
      },
    }
  )
);