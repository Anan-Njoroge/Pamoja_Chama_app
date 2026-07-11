import type { TextStyle } from 'react-native';

import type { ColorKey } from '@/theme';

import type { TextComponentProps } from '@/types';

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body'
  | 'small'
  | 'caption'
  | 'button';

export type FontWeight =
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold';

export interface AppTextProps
  extends TextComponentProps {

  children: React.ReactNode;

  variant?: TextVariant;

  color?: ColorKey;

  weight?: FontWeight;

  align?: TextStyle['textAlign'];
}