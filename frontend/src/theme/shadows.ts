/**
 * ============================================================================
 * Shadow Tokens
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Defines reusable elevation styles for the entire application.
 *
 * React Native handles shadows differently on iOS and Android.
 *
 * Android:
 * elevation
 *
 * iOS:
 * shadowColor
 * shadowOpacity
 * shadowRadius
 * shadowOffset
 *
 * ============================================================================
 */

import { ViewStyle } from 'react-native';

export const Shadows: Record<
  'none' | 'sm' | 'md' | 'lg' | 'xl',
  ViewStyle
> = {

  none: {},

  sm: {
    shadowColor: '#000',

    shadowOpacity: 0.08,

    shadowRadius: 3,

    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 2,
  },

  md: {
    shadowColor: '#000',

    shadowOpacity: 0.10,

    shadowRadius: 6,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 4,
  },

  lg: {
    shadowColor: '#000',

    shadowOpacity: 0.14,

    shadowRadius: 10,

    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 7,
  },

  xl: {
    shadowColor: '#000',

    shadowOpacity: 0.18,

    shadowRadius: 14,

    shadowOffset: {
      width: 0,
      height: 8,
    },

    elevation: 10,
  },

};

export type ShadowKey = keyof typeof Shadows;