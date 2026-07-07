/**
 * ============================================================================
 * Spacing Design Tokens
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Defines the spacing scale used throughout the application.
 *
 * Never use raw numbers like:
 *
 *    margin: 16
 *    padding: 24
 *
 * Instead use:
 *
 *    margin: Spacing.md
 *    padding: Spacing.lg
 *
 * This ensures consistency across every screen.
 * ============================================================================
 */

export const Spacing = {
  none: 0,

  xxs: 2,

  xs: 4,

  sm: 8,

  md: 16,

  lg: 24,

  xl: 32,

  xxl: 48,

  xxxl: 64,
} as const;