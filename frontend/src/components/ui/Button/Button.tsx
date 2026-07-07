/**
 * ============================================================================
 * AppButton Component
 * ============================================================================
 *
 * PURPOSE
 * -------
 * AppButton is the reusable button component used throughout the application.
 *
 * Instead of using React Native's built-in Button, every screen should use
 * AppButton so that all buttons share the same:
 *
 * • Colors
 * • Typography
 * • Spacing
 * • Border radius
 * • Press animations
 * • Accessibility
 *
 * FUTURE ENHANCEMENTS
 * -------------------
 * Future milestones will add:
 *
 * • Left icons
 * • Right icons
 * • Loading animations
 * • Gradient buttons
 * • Icon-only buttons
 * ============================================================================
 */

import React from 'react';

import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import { AppText } from '../Text';

import {
  Colors,
  Radius,
  Sizes,
  Spacing,
} from '../../../theme';

/**
 * ============================================================================
 * Types
 * ============================================================================
 */

type Variant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'outline';

interface AppButtonProps {
  title: string;

  onPress: () => void;

  variant?: Variant;

  disabled?: boolean;

  loading?: boolean;

  /**
   * Makes the button occupy the available width.
   *
   * Default: true
   */
  fullWidth?: boolean;

  style?: StyleProp<ViewStyle>;
}

/**
 * ============================================================================
 * Component
 * ============================================================================
 */

export default function AppButton({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  fullWidth = true,
  style,
}: AppButtonProps) {
  const textColor =
    variant === 'outline'
      ? Colors.primary
      : Colors.white;

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled || loading}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,

        variantStyles[variant],

        fullWidth
          ? styles.fullWidth
          : styles.autoWidth,

        pressed && styles.pressed,

        disabled && styles.disabled,

        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <AppText
          variant="button"
          style={{
            color: textColor,
          }}
        >
          {title}
        </AppText>
      )}
    </Pressable>
  );
}

/**
 * ============================================================================
 * Styles
 * ============================================================================
 */

const styles = StyleSheet.create({
  button: {
    height: Sizes.buttonHeight,

    borderRadius: Radius.md,

    justifyContent: 'center',

    alignItems: 'center',

    // Horizontal breathing room
    paddingHorizontal: Spacing.lg,

    // Prevent tiny buttons
    minWidth: 140,
  },

  fullWidth: {
    width: '100%',
  },

  autoWidth: {
    alignSelf: 'flex-start',
  },

  pressed: {
    opacity: 0.85,
  },

  disabled: {
    backgroundColor: Colors.disabled,
  },
});

const variantStyles = StyleSheet.create({
  primary: {
    backgroundColor: Colors.primary,
  },

  secondary: {
    backgroundColor: Colors.primaryLight,
  },

  success: {
    backgroundColor: Colors.success,
  },

  danger: {
    backgroundColor: Colors.danger,
  },

  outline: {
    backgroundColor: Colors.transparent,
    borderWidth: 1.5,
    borderColor: Colors.primary,
  },
});