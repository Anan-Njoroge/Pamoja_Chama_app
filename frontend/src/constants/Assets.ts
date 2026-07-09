/**
 * ============================================================================
 * Assets
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Central registry for every static asset used throughout the application.
 *
 * WHY?
 * ----
 * Instead of scattering require() statements throughout the project,
 * every image is registered once here.
 *
 * BENEFITS
 * --------
 * ✓ Single source of truth
 * ✓ Easier refactoring
 * ✓ Cleaner imports
 * ✓ Better autocomplete
 *
 * ============================================================================
 */

export const Assets = {
  // ==========================================================================
  // Splash
  // ==========================================================================

  splashLogo: require('../../assets/splash/splash-icon.png'),
} as const;