import AsyncStorage from "@react-native-async-storage/async-storage";
import type { StateStorage } from "zustand/middleware";

const canUseStorage = typeof window !== "undefined";

/**
 * AsyncStorage on web proxies to `window.localStorage`, which does not
 * exist while Expo's static web renderer runs on the server. Reading and
 * writing are skipped there so SSR never throws, and the real storage is
 * used as soon as the app runs in the browser.
 */
export const stateStorage: StateStorage = {
  getItem: async (name) => {
    if (!canUseStorage) return null;
    return AsyncStorage.getItem(name);
  },
  setItem: async (name, value) => {
    if (!canUseStorage) return;
    await AsyncStorage.setItem(name, value);
  },
  removeItem: async (name) => {
    if (!canUseStorage) return;
    await AsyncStorage.removeItem(name);
  },
};
