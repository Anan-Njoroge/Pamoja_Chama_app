import { Radius } from '@/theme';

import type {
  AvatarSize,
} from './Avatar.types';

export const AVATAR_SIZES: Record<
  AvatarSize,
  {
    size: number;
    fontVariant: 'caption' | 'small' | 'body';
    radius: number;
    indicator: number;
  }
> = {
  xs: {
    size: 28,
    fontVariant: 'caption',
    radius: Radius.full,
    indicator: 8,
  },

  sm: {
    size: 36,
    fontVariant: 'caption',
    radius: Radius.full,
    indicator: 10,
  },

  md: {
    size: 48,
    fontVariant: 'small',
    radius: Radius.full,
    indicator: 12,
  },

  lg: {
    size: 64,
    fontVariant: 'body',
    radius: Radius.full,
    indicator: 14,
  },

  xl: {
    size: 88,
    fontVariant: 'body',
    radius: Radius.full,
    indicator: 16,
  },
};