import type { ColorKey } from '@/theme';

export const COLOR_GROUPS = {

  Brand: [
    'primary',
    'primaryMuted',
    'primaryLight',
  ],

  Success: [
    'success',
    'successBright',
    'successBg',
  ],

  Danger: [
    'danger',
    'dangerBg',
  ],

  Pending: [
    'pending',
    'pendingBorder',
    'pendingBg',
  ],

  Neutral: [
    'background',
    'surface',
    'surfaceSecondary',
    'surfaceElevated',
    'card',
    'border',
    'divider',
  ],

  Glass: [
    'glass',
    'glassStrong',
    'glassTint',
    'glassBorder',
  ],

  Avatar: [
    'avatarPurple',
    'avatarBlue',
    'avatarSky',
    'avatarGreen',
    'avatarOrange',
    'avatarRed',
    'avatarTeal',
    'avatarViolet',
  ],

} satisfies Record<string, ColorKey[]>;