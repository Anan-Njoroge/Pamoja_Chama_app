/**
 * ============================================================================
 * Border Radius Tokens
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Centralizes every border radius used throughout the application.
 *
 * Components should NEVER use hardcoded values like:
 *
 * borderRadius: 12
 *
 * Instead:
 *
 * borderRadius: Radius.lg
 *
 * This ensures consistency across the design system.
 *
 * ============================================================================
 */

export const Radius = {

  none: 0,

  xs: 4,

  sm: 8,

  md: 12,

  lg: 16,

  xl: 20,

  xxl: 28,

  full: 9999,

} as const;

export type RadiusKey = keyof typeof Radius;