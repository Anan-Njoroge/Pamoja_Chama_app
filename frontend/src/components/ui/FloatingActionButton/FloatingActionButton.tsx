/**
 * ============================================================================
 * AppFloatingActionButton (FAB)
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Displays the primary action for the current screen.
 *
 * A Floating Action Button should be used sparingly—typically only one
 * per screen—and only for the most important action the user can take.
 *
 * Examples:
 * ✓ Add Member
 * ✓ Record Payment
 * ✓ Create Group
 * ✓ Request Inventory
 *
 * ============================================================================
 */

import React from 'react';

import {
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import {
  AppIcon,
  type IconName,
} from '../Icon';

import {
  Colors,
  Shadows,
  Spacing,
} from '@/theme';
import { PressableComponentProps } from '@/types/component';

import type { ViewComponentProps } from '@/types';

export interface AppFloatingActionButtonProps
  extends PressableComponentProps {

  icon?: IconName;
}

export function AppFloatingActionButton({
  icon = 'plus',
  onPress,
  disabled = false,
  style,
  testID,
}: AppFloatingActionButtonProps) {

  return (
    <Pressable
      testID={testID}
      disabled={disabled}
      onPress={onPress}
      android_ripple={{
        color: Colors.primaryMuted,
        radius: 28,
      }}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      <AppIcon
        name={icon}
        color="white"
        size="lg"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({

  button: {

    position: 'absolute',

    right: Spacing.lg,

    bottom: Spacing.xl,

    width: 60,

    height: 60,

    borderRadius: 30,

    backgroundColor: Colors.primary,

    justifyContent: 'center',

    alignItems: 'center',

    ...Shadows.md,
  },

  pressed: {

    transform: [{ scale: 0.95 }],
  },

  disabled: {

    backgroundColor: Colors.disabled,

    opacity: 0.7,
  },

});