// src/theme/typography.ts

export const Typography = {
  h1: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '700' as const,
  },

  h2: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '700' as const,
  },

  h3: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '600' as const,
  },

  // ⭐ Added
  title: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600' as const,
  },

  body: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400' as const,
  },

  small: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400' as const,
  },

  caption: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400' as const,
  },

  button: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600' as const,
  },
} as const;

export type TypographyKey = keyof typeof Typography;