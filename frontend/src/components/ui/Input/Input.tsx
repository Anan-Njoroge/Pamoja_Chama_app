/**
 * ============================================================================
 * AppInput Component
 * ============================================================================
 *
 * PURPOSE
 * -------
 * AppInput is the application's reusable text input component.
 *
 * Instead of using React Native's TextInput directly on every screen,
 * every form in the application should use AppInput.
 *
 * This ensures:
 *
 * • Consistent styling
 * • Consistent spacing
 * • Consistent typography
 * • Centralized maintenance
 *
 * FUTURE ENHANCEMENTS
 * -------------------
 * This component is intentionally designed to grow with the application.
 * Later milestones will add:
 *
 * • Left and right icons
 * • Phone number formatting
 * • Password visibility toggle
 * • Input masking
 * • Character counter
 * • Validation states
 *
 * USED BY
 * -------
 * - Login Screen
 * - Registration
 * - Create Chama
 * - Join Chama
 * - Profile
 * - Payments
 * ============================================================================
 */

import React from 'react';

import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
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
 * Props
 * ============================================================================
 */

interface AppInputProps extends TextInputProps {
  /**
   * Label displayed above the input.
   */
  label?: string;

  /**
   * Optional validation error.
   */
  error?: string;
}

/**
 * ============================================================================
 * Component
 * ============================================================================
 */

export default function AppInput({
  label,
  error,
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
        style={[
          styles.input,
          error && styles.inputError,
          style,
        ]}
        placeholderTextColor={Colors.textPlaceholder}
        {...props}
      />

      {error && (
        <AppText
          variant="caption"
          color="danger"
          style={styles.error}
        >
          {error}
        </AppText>
      )}
    </View>
  );
}

/**
 * ============================================================================
 * Styles
 * ============================================================================
 */

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: Spacing.md,
  },

  label: {
    marginBottom: Spacing.xs,
  },

  input: {
    height: Sizes.inputHeight,

    borderWidth: 1,

    borderColor: Colors.border,

    borderRadius: Radius.md,

    paddingHorizontal: Spacing.md,

    backgroundColor: Colors.white,

    color: Colors.textPrimary,

    fontSize: 16,
  },

  inputError: {
    borderColor: Colors.danger,
  },

  error: {
    marginTop: Spacing.xs,
  },
});