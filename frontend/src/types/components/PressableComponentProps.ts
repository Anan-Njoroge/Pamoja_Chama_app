import type {
  StyleProp,
  ViewStyle,
} from 'react-native';

import type {
  CommonProps,
} from './CommonProps';

export interface PressableComponentProps
  extends CommonProps {

  /**
   * Optional press handler.
   */
  onPress?: () => void;

  /**
   * Disable interactions.
   */
  disabled?: boolean;

  /**
   * Optional container style.
   */
  style?: StyleProp<ViewStyle>;
}