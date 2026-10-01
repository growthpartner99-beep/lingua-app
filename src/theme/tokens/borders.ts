export const borders = {
  width: {
    none: 0,
    thin: 1,
  },
  style: 'solid',
  color: '#E5E7EB',
} as const;

export type BorderTokens = typeof borders;