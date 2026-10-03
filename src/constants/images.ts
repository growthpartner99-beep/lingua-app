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