/**
 * ============================================================================
 * AppSurface
 * ============================================================================
 *
 * Foundation container for the Pamoja Chama design system.
 *
 * ============================================================================
 */

import React from 'react';

import {
  View,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import { BlurView } from 'expo-blur';

import {
  Colors,
  Radius,
  Shadows,
  Spacing,
  ColorKey,
  RadiusKey,
  ShadowKey,
  SpacingKey,
} from '@/theme';

import type { ViewComponentProps } from '@/types';

export type SurfaceVariant =
  | 'card'
  | 'glass'
  | 'outlined'
  | 'transparent'
  | 'elevated';

export interface AppSurfaceProps extends ViewComponentProps {
  variant?: SurfaceVariant;

  padding?: SpacingKey;

  radius?: RadiusKey;

  elevation?: ShadowKey;

  backgroundColor?: ColorKey;

  borderColor?: ColorKey;

  borderWidth?: number;

  blurIntensity?: number;

  blurTint?: 'light' | 'dark' | 'default';

  children?: React.ReactNode;
}

const SURFACE_PRESETS = {
  card: {
    backgroundColor: 'surface',
    borderColor: 'transparent',
    borderWidth: 0,
    blur: false,
    elevation: 'sm',
  },

  elevated: {
    backgroundColor: 'surfaceElevated',
    borderColor: 'transparent',
    borderWidth: 0,
    blur: false,
    elevation: 'md',
  },

  glass: {
    backgroundColor: 'glassTint',
    borderColor: 'glassBorder',
    borderWidth: 1,
    blur: true,
    elevation: 'sm',
  },

  outlined: {
    backgroundColor: 'transparent',
    borderColor: 'border',
    borderWidth: 1,
    blur: false,
    elevation: 'none',
  },

  transparent: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    blur: false,
    elevation: 'none',
  },
} as const;

export function AppSurface({
  variant = 'card',
  padding = 'lg',
  radius = 'xl',
  elevation,
  backgroundColor,
  borderColor,
  borderWidth,
  blurIntensity = 45,
  blurTint = 'light',
  style,
  children,
  ...props
}: AppSurfaceProps) {
  const preset = SURFACE_PRESETS[variant];

  const surfaceStyle: ViewStyle = {
    borderRadius: Radius[radius],

    padding: Spacing[padding],

    backgroundColor:
      Colors[backgroundColor ?? preset.backgroundColor],

    borderColor:
      Colors[borderColor ?? preset.borderColor],

    borderWidth:
      borderWidth ?? preset.borderWidth,

    overflow: 'hidden',
  };

  const shadowStyle =
    Shadows[elevation ?? preset.elevation];

  if (preset.blur) {
    return (
      <BlurView
        {...props}
        intensity={blurIntensity}
        tint={blurTint}
        style={[
          styles.surface,
          surfaceStyle,
          shadowStyle,
          style,
        ]}
      >
        {children}
      </BlurView>
    );
  }

  return (
    <View
      {...props}
      style={[
        styles.surface,
        surfaceStyle,
        shadowStyle,
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  surface: {
    overflow: 'hidden',
  },
});

AppSurface.displayName = 'AppSurface';