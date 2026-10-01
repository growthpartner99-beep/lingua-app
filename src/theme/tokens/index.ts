export * from './colors';
export * from './typography';
export * from './spacing';
export * from './radius';
export * from './borders';
export * from './shadows';

import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { radius } from './radius';
import { borders } from './borders';
import { shadows } from './shadows';

export const tokens = {
  colors,
  typography,
  spacing,
  radius,
  borders,
  shadows,
} as const;

export type DesignTokens = typeof tokens;