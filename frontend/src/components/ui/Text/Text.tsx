/**
 * ============================================================================
 * AppText
 * ============================================================================
 *
 * PURPOSE
 * -------
 * AppText is the only text component that should be used throughout
 * the Pamoja Chama application.
 *
 * WHY?
 * ----
 * Instead of styling React Native's Text component on every screen,
 * AppText centralizes typography, colours and accessibility.
 *
 * BENEFITS
 * --------
 * ✓ Consistent typography
 * ✓ Centralized colours
 * ✓ Type-safe variants
 * ✓ Better accessibility
 *
 * ============================================================================
 */

import React from 'react';

import {
  Text as RNText,
  TextProps,
  StyleSheet,
} from 'react-native';

import {
  Colors,
  Typography,
  ColorKey,
} from '@/theme';

import {
  TextComponentProps,
} from '@/types';

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body'
  | 'small'
  | 'caption'
  | 'button';

export interface AppTextProps
  extends 
    TextComponentProps {

  children: React.ReactNode;

  variant?: TextVariant;

  color?: ColorKey;
}

export function AppText({

  children,

  variant = 'body',

  color = 'textPrimary',

  style,

  testID,

  accessibilityLabel,

  accessibilityHint,

  ...props

}: AppTextProps) {

  return (

    <RNText

      testID={testID}

      accessibilityLabel={accessibilityLabel}

      accessibilityHint={accessibilityHint}

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