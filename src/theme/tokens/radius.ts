export const radius = {
  none: 0,
  sm: 8,
  md: 12,
  lg: 16,
  full: 9999,
} as const;

export type RadiusTokens = typeof radius;