/**
 * ============================================================================
 * Colors
 * ============================================================================
 *
 * PURPOSE
 * -------
 * This file is the single source of truth for every colour used throughout
 * the Pamoja Chama application.
 *
 * WHY?
 * ----
 * Instead of scattering hexadecimal colour values across components,
 * every colour is defined once here and referenced by name.
 *
 * BENEFITS
 * --------
 * ✓ Consistent branding
 * ✓ Easier maintenance
 * ✓ Theme support (future dark mode)
 * ✓ Strong TypeScript typing
 *
 * Example:
 *
 * import { Colors } from '@/theme';
 *
 * backgroundColor: Colors.primary
 *
 * Never use:
 *
 * backgroundColor: '#534AB7'
 *
 * ============================================================================
 */

export const Colors = {
  // ==========================================================================
  // Brand Colours
  // ==========================================================================

  primary: '#534AB7',
  primaryMuted: '#ACA6EA',
  primaryLight: '#F3F1FF',

  // ==========================================================================
  // Text Colours
  // ==========================================================================

  textPrimary: '#000000',
  textSecondary: '#3F3D3D',
  textPlaceholder: '#9A9797',

  // ==========================================================================
  // Success
  // ==========================================================================

  success: '#64A905',
  successBright: '#78EA59',
  successBg: '#E6FFC2',

  // ==========================================================================
  // Pending
  // ==========================================================================

  pending: '#EF9F27',
  pendingBorder: '#B77006',
  pendingBg: '#FFF3E0',

  // ==========================================================================
  // Danger
  // ==========================================================================

  danger: '#DD4347',
  dangerBg: '#FFE0E1',

  // ==========================================================================
  // Neutral Colours
  // ==========================================================================

  background: '#F8F9FC',

  surface: '#FFFFFF',

  surfaceSecondary: '#FAFBFD',

  surfaceElevated: '#FFFFFF',

  card: '#FFFFFF',

  white: '#FFFFFF',

  black: '#000000',

  border: '#E5E7EB',

  divider: '#F1F5F9',

  disabled: '#D1D5DB',

  disabledText: '#9CA3AF',

  transparent: 'transparent',

  // ==========================================================================
  // Avatar Palette
  // ==========================================================================
  //
  // Used for automatically generated initials avatars.
  //
  // These colours are intentionally vibrant so members are easier to
  // distinguish in long lists before uploading profile photos.
  //
  // The AppAvatar component hashes a user's name and consistently maps
  // it to one of these colours.
  //
  // Example:
  //
  // John Mwangi  -> avatarPurple
  // Mary Wanjiku -> avatarBlue
  //
  // The same name will always receive the same colour.
  // ==========================================================================

  avatarPurple: '#534AB7',

  avatarBlue: '#3B82F6',

  avatarSky: '#0EA5E9',

  avatarGreen: '#64A905',

  avatarTeal: '#14B8A6',

  avatarOrange: '#EF9F27',

  avatarRed: '#DD4347',

  avatarViolet: '#9333EA',

  // ============================================================================
 // Glassmorphism
 // ============================================================================

overlay: 'rgba(0,0,0,0.35)',

glass: 'rgba(255,255,255,0.18)',

glassStrong: 'rgba(255,255,255,0.28)',

glassTint: 'rgba(83,74,183,0.08)',

glassBorder: 'rgba(255,255,255,0.35)',
} as const;

/**
 * ============================================================================
 * ColorKey
 * ============================================================================
 *
 * Produces a union of every key inside the Colors object.
 *
 * Example:
 *
 * color?: ColorKey
 *
 * Which becomes:
 *
 * "primary"
 * | "danger"
 * | "avatarBlue"
 * | ...
 *
 * TypeScript will then catch invalid colour names during compilation.
 */
export type ColorKey = keyof typeof Colors;