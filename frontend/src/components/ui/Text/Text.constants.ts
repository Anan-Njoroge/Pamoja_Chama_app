import type { TextStyle } from 'react-native';

import type { FontWeight } from './Text.types';

export const FONT_WEIGHTS: Record<
  FontWeight,
  TextStyle['fontWeight']
> = {
  regular: '400',

  medium: '500',

  semibold: '600',

  bold: '700',
};