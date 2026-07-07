/**
 * ============================================================================
 * AppButton
 * ============================================================================
 *
 * PURPOSE
 * -------
 * A reusable button component used throughout the Pamoja Chama app.
 *
 * WHY HAVE A CUSTOM BUTTON?
 * -------------------------
 * React Native provides a basic <Button />, but it is difficult to style
 * consistently across platforms.
 *
 * This component wraps Pressable and applies our design tokens so every
 * button in the application looks and behaves consistently.
 *
 * FEATURES
 * --------
 * ✓ Multiple variants
 * ✓ Multiple sizes
 * ✓ Optional left icon
 * ✓ Optional right icon
 * ✓ Loading state
 * ✓ Disabled state
 * ✓ Full-width or content-width
 * ✓ Consistent spacing
 *
 * EXAMPLE
 * -------
 * <AppButton
 *   title="Request Inventory"
 *   leftIcon={<AppIcon name="record" color="white" />}
 *   onPress={() => {}}
 * />
 */

import React from 'react';

import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import { AppText } from '../Text';

import {
  Colors,
  Radius,
  Shadows,
  Spacing,
} from '@/theme';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'outline'
  | 'ghost';

export type ButtonSize =
  | 'sm'
  | 'md'
  | 'lg';

interface AppButtonProps {
  title: string;

  onPress: () => void;

  variant?: ButtonVariant;

  size?: ButtonSize;

  leftIcon?: React.ReactNode;

  rightIcon?: React.ReactNode;

  loading?: boolean;

  disabled?: boolean;

  fullWidth?: boolean;

  style?: StyleProp<ViewStyle>;
}

const BUTTON_VARIANTS = {
  primary: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    textColor: Colors.white,
    borderWidth: 0,
  },

  secondary: {
    backgroundColor: Colors.primaryLight,
    borderColor: Colors.primaryLight,
    textColor: Colors.primary,
    borderWidth: 0,
  },

  success: {
    backgroundColor: Colors.success,
    borderColor: Colors.success,
    textColor: Colors.white,
    borderWidth: 0,
  },

  danger: {
    backgroundColor: Colors.danger,
    borderColor: Colors.danger,
    textColor: Colors.white,
    borderWidth: 0,
  },

  outline: {
    backgroundColor: Colors.transparent,
    borderColor: Colors.primary,
    textColor: Colors.primary,
    borderWidth: 1,
  },

  ghost: {
    backgroundColor: Colors.transparent,
    borderColor: Colors.transparent,
    textColor: Colors.primary,
    borderWidth: 0,
  },
};

const BUTTON_SIZES = {
  sm: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontVariant: 'small' as const,
  },

  md: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    fontVariant: 'button' as const,
  },

  lg: {
    paddingVertical: 18,
    paddingHorizontal: 24,
    fontVariant: 'button' as const,
  },
};

export function AppButton({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  loading = false,
  disabled = false,
  fullWidth = true,
  style,
}: AppButtonProps) {
  const currentVariant = BUTTON_VARIANTS[variant];
  const currentSize = BUTTON_SIZES[size];

  const textColor = disabled
    ? Colors.disabledText
    : currentVariant.textColor;

  return (
    <Pressable
      disabled={disabled || loading}
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.button,

        {
          backgroundColor: disabled
            ? Colors.disabled
            : currentVariant.backgroundColor,

          borderColor: currentVariant.borderColor,

          borderWidth: currentVariant.borderWidth,

          width: fullWidth ? '100%' : undefined,

          opacity: pressed ? 0.9 : 1,

          paddingVertical: currentSize.paddingVertical,

          paddingHorizontal: currentSize.paddingHorizontal,
        },

        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <View style={styles.content}>
          {leftIcon && (
            <View
              style={{
                marginRight: title ? Spacing.sm : 0,
              }}
            >
              {leftIcon}
            </View>
          )}

          <AppText
            variant={currentSize.fontVariant}
            style={{
              color: textColor,
            }}
          >
            {title}
          </AppText>

          {rightIcon && (
            <View
              style={{
                marginLeft: title ? Spacing.sm : 0,
              }}
            >
              {rightIcon}
            </View>
          )}
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: Radius.pill,

    justifyContent: 'center',

    alignItems: 'center',

    ...Shadows.sm,
  },

  content: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',
  },
});