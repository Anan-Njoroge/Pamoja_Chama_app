import type {
    StyleProp,
    ViewStyle,
  } from 'react-native';
  
  import type { CommonProps } from './CommonProps';
  
  export interface ViewComponentProps extends CommonProps {
    style?: StyleProp<ViewStyle>;
  }