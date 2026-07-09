/**
 * ============================================================================
 * Shared Component Types
 * ============================================================================
 *
 * Common interfaces used across the application's reusable components.
 *
 * WHY?
 * ----
 * Many components share the same props:
 *
 * • style
 * • testID
 * • accessibilityLabel
 * • accessibilityHint
 *
 * Rather than redefining these everywhere, we define them once here.
 *
 * ============================================================================
 */

import type {
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface BaseComponentProps {
  testID?: string;

  accessibilityLabel?: string;

  accessibilityHint?: string;
}

export interface ViewComponentProps
  extends BaseComponentProps {

  style?: StyleProp<ViewStyle>;
}

export interface TextComponentProps
  extends BaseComponentProps {

  style?: StyleProp<TextStyle>;
}

/**
 * Shared by components that can be disabled.
 */
export interface Disableable {

  disabled?: boolean;
}

/**
 * Shared by components that react to a press.
 */
export interface PressableComponentProps
  extends ViewComponentProps,
    Disableable {

  onPress: () => void;
}