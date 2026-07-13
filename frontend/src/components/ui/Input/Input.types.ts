/**
 * ============================================================================
 * AppInput Types
 * ============================================================================
 */

import type {
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  TextInputProps,
} from 'react-native';

import type { IconName } from '../Icon';

import type { CommonProps } from '@/types/components/CommonProps';

export type InputVariant =
  | 'filled'
  | 'outlined'
  | 'underlined';

export type InputState =
  | 'default'
  | 'success'
  | 'warning'
  | 'error';

export interface AppInputProps
  extends Omit<
    TextInputProps,
    'style'
  >,
    CommonProps {

  label?: string;

  helperText?: string;

  error?: string;

  required?: boolean;

  variant?: InputVariant;

  state?: InputState;

  leftIcon?: IconName;

  rightIcon?: IconName;

  clearable?: boolean;

  containerStyle?: any;

  keyboardType?: KeyboardTypeOptions;

  returnKeyType?: ReturnKeyTypeOptions;
}