/**
 * ============================================================================
 * Authentication Layout Constants
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Centralizes every constant used by the AuthenticationLayout.
 *
 * Instead of scattering values throughout the component,
 * everything is defined here.
 *
 * BENEFITS
 * --------
 * ✓ Easy to maintain
 * ✓ No magic numbers
 * ✓ Consistent spacing
 * ✓ Future-proof for animations and responsiveness
 *
 * ============================================================================
 */

export const AUTHENTICATION_LAYOUT = {
  /**
   * Maximum width of the authentication content.
   *
   * Prevents the layout from becoming too wide on tablets
   * and web while remaining full-width on phones.
   */
  maxWidth: 420,

  /**
   * Width occupied by the content.
   */
  contentWidth: '100%' as const,

  /**
   * Keyboard vertical offset.
   */
  keyboardOffset: 24,

  /**
   * Percentage of the screen used by the logo.
   * The actual sizing will be handled in the styles.
   */
  logoScale: 0.28,

  /**
   * Maximum logo dimensions.
   */
  logoMaxWidth: 180,
  logoMaxHeight: 180,

  /**
   * Future animation duration (ms).
   */
  animationDuration: 250,

  /**
   * ScrollView keyboard behavior.
   */
  keyboardShouldPersistTaps: 'handled' as const,
};

export const AUTHENTICATION_COPY = {
  appName: 'Pamoja Chama',
};