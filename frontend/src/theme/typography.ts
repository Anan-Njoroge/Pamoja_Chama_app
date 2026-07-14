import { TextStyle } from 'react-native';

export const Typography = {
  h1: {
    fontFamily: 'DMSans_700Bold',
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -0.5,
  },

  h2: {
    fontFamily: 'DMSans_700Bold',
    fontSize: 26,
    lineHeight: 34,
    letterSpacing: -0.3,
  },

  h3: {
    fontFamily: 'DMSans_600SemiBold',
    fontSize: 22,
    lineHeight: 30,
  },

  body: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 16,
    lineHeight: 24,
  },

  button: {
    fontFamily: 'DMSans_600SemiBold',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.2,
  },

  small: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 14,
    lineHeight: 20,
  },

  caption: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 12,
    lineHeight: 16,
  },
} satisfies Record<string, TextStyle>;

export type TypographyVariant = keyof typeof Typography;