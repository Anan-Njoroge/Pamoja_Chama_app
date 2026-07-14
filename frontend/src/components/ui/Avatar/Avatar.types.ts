/**
 * ============================================================================
 * AppAvatar Types
 * ============================================================================
 */

import type {
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from 'react-native';

export type AvatarSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl';

export interface AppAvatarProps {
  /**
   * User's full name.
   * Used for initials and deterministic avatar colours.
   */
  name: string;

  /**
   * Optional profile photo.
   */
  source?: ImageSourcePropType;

  /**
   * Avatar size.
   */
  size?: AvatarSize;

  /**
   * Show online indicator.
   */
  online?: boolean;

  /**
   * Custom styles.
   */
  style?: StyleProp<ViewStyle>;
}