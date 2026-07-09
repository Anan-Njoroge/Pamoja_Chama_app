/**
 * ============================================================================
 * Spacing Tokens
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Defines the spacing scale used throughout the application.
 *
 * Components should use these semantic values instead of hardcoded numbers.
 *
 * Example:
 *
 * padding: Spacing.md
 * marginBottom: Spacing.lg
 *
 * ============================================================================
 */

export const Spacing = {

  none: 0,

  xs: 4,

  sm: 8,

  md: 12,

  lg: 16,

  xl: 24,

  xxl: 32,

  xxxl: 40,

} as const;

/**
 * Semantic spacing keys.
 */
export type SpacingKey = keyof typeof Spacing;