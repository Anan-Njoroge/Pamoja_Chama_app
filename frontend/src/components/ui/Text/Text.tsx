import React from 'react';
import {
  Text as RNText,
  TextProps,
  StyleSheet,
} from 'react-native';

import { Colors, Typography, ColorKey } from '@/theme';

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body'
  | 'small'
  | 'caption'
  | 'button';

interface AppTextProps extends TextProps {
  children: React.ReactNode;
  variant?: Variant;
  color?: ColorKey;
}

export function AppText({
  children,
  variant = 'body',
  color = 'textPrimary',
  style,
  ...props
}: AppTextProps) {
  return (
    <RNText
      style={[
        styles.base,
        Typography[variant],
        {
          color: Colors[color],
        },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  base: {
    includeFontPadding: false,
  },
});