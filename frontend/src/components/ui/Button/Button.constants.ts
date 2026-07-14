import type { ColorKey } from '@/theme';

import type {
  ButtonSize,
  ButtonVariant,
} from './Button.types';

export const BUTTON_VARIANTS: Record<
  ButtonVariant,
  {
    backgroundColor: ColorKey;
    borderColor: ColorKey;
    textColor: ColorKey;
    borderWidth: number;
  }
> = {
  primary: {
    backgroundColor: 'primary',
    borderColor: 'primary',
    textColor: 'white',
    borderWidth: 0,
  },

  secondary: {
    backgroundColor: 'primaryLight',
    borderColor: 'primaryLight',
    textColor: 'primary',
    borderWidth: 0,
  },

  success: {
    backgroundColor: 'success',
    borderColor: 'success',
    textColor: 'white',
    borderWidth: 0,
  },

  danger: {
    backgroundColor: 'danger',
    borderColor: 'danger',
    textColor: 'white',
    borderWidth: 0,
  },

  outline: {
    backgroundColor: 'transparent',
    borderColor: 'primary',
    textColor: 'primary',
    borderWidth: 1,
  },

  ghost: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    textColor: 'primary',
    borderWidth: 0,
  },
};

export const BUTTON_SIZES: Record<
  ButtonSize,
  {
    paddingVertical: number;
    paddingHorizontal: number;
    textVariant: 'small' | 'button';
    iconSize: 'sm' | 'md';
  }
> = {
  sm: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    textVariant: 'small',
    iconSize: 'sm',
  },

  md: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    textVariant: 'button',
    iconSize: 'md',
  },

  lg: {
    paddingVertical: 18,
    paddingHorizontal: 24,
    textVariant: 'button',
    iconSize: 'md',
  },
};