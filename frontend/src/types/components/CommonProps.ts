/**
 * ============================================================================
 * Common Component Props
 * ============================================================================
 *
 * Props shared across every component in the design system.
 * ============================================================================
 */

export interface CommonProps {
  /**
   * Testing identifier.
   */
  testID?: string;

  /**
   * Accessibility label.
   */
  accessibilityLabel?: string;

  /**
   * Accessibility hint.
   */
  accessibilityHint?: string;
}