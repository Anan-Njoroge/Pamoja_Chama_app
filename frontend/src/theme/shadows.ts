/**
 * ============================================================================
 * Shadow Tokens
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Standard shadow presets for cards, modals, and floating elements.
 *
 * Android uses elevation while iOS uses shadow properties.
 * ============================================================================
 */

export const Shadows = {
  sm: {
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 2,
  },

  md: {
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 4,
  },

  lg: {
    shadowColor: '#000',
    shadowOpacity: 0.16,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 8,
  },
} as const;