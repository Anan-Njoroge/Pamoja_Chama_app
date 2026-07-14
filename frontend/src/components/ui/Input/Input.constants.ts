/**
 * ============================================================================
 * Input Constants
 * ============================================================================
 */

import type {
  ColorKey,
} from '@/theme';

import type {
  InputState,
} from './Input.types';

export const INPUT_STATE_COLORS: Record<
  InputState,
  {
    border: ColorKey;
    label: ColorKey;
    helper: ColorKey;
  }
> = {

  default: {
    border: 'border',
    label: 'textSecondary',
    helper: 'textPlaceholder',
  },

  success: {
    border: 'success',
    label: 'success',
    helper: 'success',
  },

  warning: {
    border: 'pending',
    label: 'pending',
    helper: 'pending',
  },

  error: {
    border: 'danger',
    label: 'danger',
    helper: 'danger',
  },

};