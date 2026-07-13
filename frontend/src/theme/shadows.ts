/**
 * ============================================================================
 * Shadow Tokens
 * ============================================================================
 *
 * Centralized elevation tokens for the design system.
 *
 * The values are intentionally subtle to create a clean fintech aesthetic.
 *
 * ============================================================================
 */

import { ViewStyle } from 'react-native';

export const Shadows: Record<
  'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  ViewStyle
> = {
  none: {},

  xs: {
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 1,
  },

  sm: {
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
  },

  md: {
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
  },

  lg: {
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 8,
  },

  xl: {
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 24,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    elevation: 12,
  },
};

export type ShadowKey = keyof typeof Shadows;