import type {
    StyleProp,
    ViewStyle,
  } from 'react-native';
  
  import type { CommonProps } from './CommonProps';
  
  export interface PressableComponentProps extends CommonProps {
    style?: StyleProp<ViewStyle>;
  }