import { Colors } from '@/theme';

import type {
  BadgeSize,
  BadgeVariant,
} from './Badge.types';

export const BADGE_VARIANTS: Record<
  BadgeVariant,
  {
    background: string;
    border: string;
    text: string;
  }
> = {
  primary: {
    background: Colors.primaryLight,
    border: Colors.primary,
    text: Colors.primary,
  },

  success: {
    background: Colors.successBg,
    border: Colors.success,
    text: Colors.success,
  },

  pending: {
    background: Colors.pendingBg,
    border: Colors.pendingBorder,
    text: Colors.pendingBorder,
  },

  danger: {
    background: Colors.dangerBg,
    border: Colors.danger,
    text: Colors.danger,
  },

  neutral: {
    background: Colors.background,
    border: Colors.border,
    text: Colors.textSecondary,
  },

  outline: {
    background: Colors.transparent,
    border: Colors.primary,
    text: Colors.primary,
  },
};

export const BADGE_SIZES: Record<
  BadgeSize,
  {
    paddingVertical: number;
    paddingHorizontal: number;
    textVariant: 'caption' | 'small' | 'body';
    iconSize: 'xs' | 'sm' | 'md';
  }
> = {
  sm: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    textVariant: 'caption',
    iconSize: 'xs',
  },

  md: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    textVariant: 'small',
    iconSize: 'sm',
  },

  lg: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    textVariant: 'body',
    iconSize: 'md',
  },
};