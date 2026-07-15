/**
 * ============================================================================
 * AppBadge Types
 * ============================================================================
 *
 * Shared types for the AppBadge component.
 * ============================================================================
 */

import type {
  StyleProp,
  ViewStyle,
} from 'react-native';

import type { IconName } from '../Icon';

export type BadgeVariant =
  | 'primary'
  | 'success'
  | 'pending'
  | 'danger'
  | 'neutral'
  | 'outline';

export type BadgeSize =
  | 'sm'
  | 'md'
  | 'lg';

export interface AppBadgeProps {
  /**
   * Badge label.
   */
  label: string;

  /**
   * Visual style.
   */
  variant?: BadgeVariant;

  /**
   * Badge size.
   */
  size?: BadgeSize;

  /**
   * Optional leading icon.
   */
  icon?: IconName;

  /**
   * Custom style overrides.
   */
  style?: StyleProp<ViewStyle>;
}