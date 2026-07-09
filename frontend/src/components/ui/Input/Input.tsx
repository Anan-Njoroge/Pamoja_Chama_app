/**
 * ============================================================================
 * AppInput
 * ============================================================================
 *
 * Reusable text input for the entire application.
 *
 * Every form should use AppInput instead of React Native's TextInput.
 *
 * Future enhancements:
 *
 * ✓ Left icon
 * ✓ Right icon
 * ✓ Password toggle
 * ✓ Phone formatting
 * ✓ Validation
 * ✓ Character counter
 * ============================================================================
 */

import React from 'react';

import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native';

import { AppText } from '../Text';

import type { IconName } from '../Icon';

import {
  Colors,
  Radius,
  Spacing,
  Typography,
} from '@/theme';

import type { ViewComponentProps } from '@/types';

export interface AppInputProps
  extends Omit<TextInputProps, 'style'> {

  /**
   * Optional label shown above the field.
   */
  label?: string;

  /**
   * Validation error.
   */
  error?: string;

  /**
   * Helper text shown below the field.
   */
  helperText?: string;

  /**
   * Reserved for future implementation.
   */
  leftIcon?: IconName;

  /**
   * Reserved for future implementation.
   */
  rightIcon?: IconName;

  /**
   * TextInput style.
   */
  style?: StyleProp<TextStyle>;
}

export function AppInput({
  label,
  error,
  helperText,
  style,
  ...props
}: AppInputProps) {

  return (

    <View style={styles.container}>

      {label && (
        <AppText
          variant="small"
          color="textSecondary"
          style={styles.label}
        >
          {label}
        </AppText>
      )}

      <TextInput
        {...props}
        placeholderTextColor={Colors.textPlaceholder}
        style={[
          styles.input,
          error && styles.inputError,
          style,
        ]}
      />

      {error ? (
        <AppText
          variant="caption"
          color="danger"
          style={styles.message}
        >
          {error}
        </AppText>
      ) : helperText ? (
        <AppText
          variant="caption"
          color="textSecondary"
          style={styles.message}
        >
          {helperText}
        </AppText>
      ) : null}

    </View>

  );

}

AppInput.displayName = 'AppInput';

const styles = StyleSheet.create({

  container: {
    width: '100%',
    marginBottom: Spacing.md,
  },

  label: {
    marginBottom: Spacing.xs,
  },

  input: {
    height: 52,

    paddingHorizontal: Spacing.md,

    borderWidth: 1,
    borderColor: Colors.border,

    borderRadius: Radius.md,

    backgroundColor: Colors.white,

    color: Colors.textPrimary,

    fontSize: Typography.body.fontSize,
    lineHeight: Typography.body.lineHeight,
    fontWeight: Typography.body.fontWeight,
  },

  inputError: {
    borderColor: Colors.danger,
  },

  message: {
    marginTop: Spacing.xs,
  },

});