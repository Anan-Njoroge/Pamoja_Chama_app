import type {
    StyleProp,
    TextStyle,
  } from 'react-native';
  
  import type { CommonProps } from './CommonProps';
  
  export interface TextInputComponentProps extends CommonProps {
    style?: StyleProp<TextStyle>;
  }