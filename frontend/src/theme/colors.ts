// src/theme/colors.ts

export const Colors = {
  // Brand
  primary: '#534AB7',
  primaryMuted: '#ACA6EA',
  primaryLight: '#F3F1FF',

  // Text
  textPrimary: '#000000',
  textSecondary: '#3F3D3D',
  textPlaceholder: '#9A9797',

  // Success
  success: '#64A905',
  successBright: '#78EA59',
  successBg: '#E6FFC2',

  // Pending
  pending: '#EF9F27',
  pendingBorder: '#B77006',
  pendingBg: '#FFF3E0',

  // Danger
  danger: '#DD4347',
  dangerBg: '#FFE0E1',

  // Neutral
  background: '#F8F9FC',
  card: '#FFFFFF',
  white: '#FFFFFF',
  black: '#000000',

  border: '#E5E7EB',
  divider: '#F1F5F9',

  disabled: '#D1D5DB',
  disabledText: '#9CA3AF',

  transparent: 'transparent',
} as const;

export type ColorKey = keyof typeof Colors;