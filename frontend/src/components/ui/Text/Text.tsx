/**
 * ============================================================================
 * AppText
 * ============================================================================
 *
 * Centralized text component for the Pamoja Chama application.
 *
 * Responsibilities:
 * ✓ Render themed text
 * ✓ Apply typography variants
 * ✓ Apply semantic colours
 * ✓ Apply optional weight & alignment
 * ============================================================================
 */

import React from 'react';

import {
  Text as RNText,
} from 'react-native';

import {
  Colors,
  Typography,
} from '@/theme';

import { FONT_WEIGHTS } from './Text.constants';
import { styles } from './Text.styles';

import type {
  AppTextProps,
} from './Text.types';

export function AppText({

  children,

  variant = 'body',

  color = 'textPrimary',

  weight,

  align,

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

        weight && {
          fontWeight: FONT_WEIGHTS[weight],
        },

        align && {
          textAlign: align,
        },

        style,
      ]}
      {...props}
    >
      {children}
    </RNText>

  );

}

AppText.displayName = 'AppText';