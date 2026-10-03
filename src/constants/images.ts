import type { ImageSourcePropType } from "react-native";
import mascotAuth from '@/assets/images/mascot-auth.png';
import mascotWelcome from '@/assets/images/mascot-welcome.png';
import mascotLogo from '@/assets/images/moscot-logo.png';
import streakFire from '@/assets/images/streak-fire.png';
import earth from '@/assets/images/earth.png';
import palace from '@/assets/images/palace.png';
import treasure from '@/assets/images/treasure.png';
import googleIcon from '@/assets/images/google-icon.png';
import aiTutor from '@/assets/images/ai-tutor.jpg';

export const images = {
  mascotAuth,
  mascotWelcome,
  mascotLogo,
  streakFire,
  earth,
  palace,
  treasure,
  googleIcon,
  aiTutor,
} as const;

export type ImageAssets = typeof images;

export const unitImages: Record<string, ImageSourcePropType> = {
  "es-u1": mascotWelcome,
  "es-u2": mascotAuth,
  "fr-u1": earth,
  "ja-u1": palace,
};

export const lessonImages: Record<string, ImageSourcePropType> = {};

const lessonImagePool: ImageSourcePropType[] = [
  mascotWelcome,
  treasure,
  earth,
  palace,
  mascotAuth,
];

export function getUnitImage(unitId: string): ImageSourcePropType {
  return unitImages[unitId] ?? mascotWelcome;
}

export function getLessonImage(lessonId: string): ImageSourcePropType {
  const override = lessonImages[lessonId];
  if (override) return override;

  const match = /-l(\d+)$/.exec(lessonId);
  const position = match ? Number(match[1]) : 1;
  const index = (position - 1) % lessonImagePool.length;

  return lessonImagePool[index] ?? mascotAuth;
}
