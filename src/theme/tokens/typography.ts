export const typography = {
  fontFamily: {
    base: 'Poppins',
    fallback: "'Segoe UI', system-ui, -apple-system, sans-serif",
  },
  scale: {
    h1: { size: 32, weight: '700', lineHeight: 1.2, role: 'Page / Screen Title' },
    h2: { size: 24, weight: '600', lineHeight: 1.3, role: 'Section Title' },
    h3: { size: 20, weight: '600', lineHeight: 1.3, role: 'Card / Module Title' },
    h4: { size: 16, weight: '500', lineHeight: 1.4, role: 'Subheading' },
    bodyLg: { size: 16, weight: '400', lineHeight: 1.6, role: 'Important content' },
    bodyMd: { size: 14, weight: '400', lineHeight: 1.6, role: 'Body text' },
    bodySm: { size: 13, weight: '400', lineHeight: 1.6, role: 'Supporting text' },
    caption: { size: 11, weight: '400', lineHeight: 1.4, role: 'Labels, meta text' },
  },
  extras: {
    sectionHeader: { size: 14, weight: '600', letterSpacing: '0.08em', transform: 'uppercase', color: '#6C4EF5' },
    groupLabel: { size: 11, weight: '400', letterSpacing: '0.03em', transform: 'uppercase', color: '#6B7280' },
  },
} as const;

export type TypographyTokens = typeof typography;