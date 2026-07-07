/**
 * ============================================================================
 * Shared Component Types
 * ============================================================================
 *
 * These interfaces define common props shared across reusable UI
 * components.
 *
 * Instead of repeating:
 *
 * style?
 * testID?
 *
 * in every component, we define them once here.
 *
 * ============================================================================
 */

import {
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface BaseComponentProps {

  /**
   * Used for automated testing.
   */
  testID?: string;
}

export interface ViewComponentProps
  extends BaseComponentProps {

  style?: StyleProp<ViewStyle>;
}

export interface TextComponentProps
  extends BaseComponentProps {

  style?: StyleProp<TextStyle>;
}