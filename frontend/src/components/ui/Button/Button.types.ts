import type { IconName } from '../Icon';

import type {
  PressableComponentProps,
} from '@/types';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'outline'
  | 'ghost';

export type ButtonSize =
  | 'sm'
  | 'md'
  | 'lg';

export interface AppButtonProps
  extends PressableComponentProps {

  title: string;

  variant?: ButtonVariant;

  size?: ButtonSize;

  leftIcon?: IconName;

  rightIcon?: IconName;

  loading?: boolean;

  fullWidth?: boolean;
}