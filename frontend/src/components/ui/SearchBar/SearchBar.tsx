/**
 * ============================================================================
 * AppSearchBar
 * ============================================================================
 *
 * PURPOSE
 * -------
 * AppSearchBar provides a consistent search input throughout the
 * Pamoja Chama application.
 *
 * WHY?
 * ----
 * Many screens need search functionality:
 *
 * • Members
 * • Transactions
 * • Notifications
 * • Loan requests
 * • Inventory
 *
 * Instead of styling a TextInput every time, this component provides
 * a single reusable implementation.
 *
 * FEATURES
 * --------
 * ✓ Search icon
 * ✓ Optional clear button
 * ✓ Placeholder
 * ✓ Native TextInput props
 * ✓ Accessibility
 * ✓ Theme integration
 *
 * ============================================================================
 */

import React from 'react';

import {
  Pressable,
  StyleSheet,
  TextInput,
  type TextInputProps,
  View,
} from 'react-native';

import {
  Colors,
  Radius,
  Spacing,
} from '@/theme';

import type { ViewComponentProps } from '@/types';

import {
  AppIcon,
  type IconName,
} from '../Icon';

export interface AppSearchBarProps
  extends Omit<TextInputProps, 'style'>,
    ViewComponentProps {

  /**
   * Optional icon shown on the left.
   *
   * Defaults to the search icon.
   */
  leftIcon?: IconName;

  /**
   * Optional icon shown on the right.
   *
   * Example:
   * filter
   * microphone
   */
  rightIcon?: IconName;

  /**
   * Called when the right icon is pressed.
   */
  onRightIconPress?: () => void;

  /**
   * Whether to show the built-in clear button.
   */
  showClearButton?: boolean;
}

export function AppSearchBar({

  value,

  onChangeText,

  placeholder = 'Search...',

  editable = true,

  leftIcon = 'search',

  rightIcon,

  onRightIconPress,

  showClearButton = true,

  style,

  testID,

  accessibilityLabel = 'Search',

  accessibilityHint,

  ...props

}: AppSearchBarProps) {

  const hasText = Boolean(value?.length);

  return (

    <View
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      style={[
        styles.container,
        style,
      ]}
    >

      {/* Left Search Icon */}

      <AppIcon
        name={leftIcon}
        size="md"
        color="textPlaceholder"
      />

      {/* Search Input */}

      <TextInput

        style={styles.input}

        value={value}

        editable={editable}

        placeholder={placeholder}

        placeholderTextColor={Colors.textPlaceholder}

        onChangeText={onChangeText}

        returnKeyType="search"

        autoCorrect={false}

        autoCapitalize="none"

        {...props}

      />

      {/* Clear Button */}

      {showClearButton && hasText && (

        <Pressable

          onPress={() => onChangeText?.('')}

          accessibilityRole="button"

          accessibilityLabel="Clear search"

        >

          <AppIcon
            name="error"
            size="sm"
            color="textPlaceholder"
          />

        </Pressable>

      )}

      {/* Optional Right Icon */}

      {!hasText && rightIcon && (

        <Pressable

          onPress={onRightIconPress}

          accessibilityRole="button"

          accessibilityLabel="Search action"

        >

          <AppIcon

            name={rightIcon}

            size="md"

            color="textSecondary"

          />

        </Pressable>

      )}

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: Colors.white,

    borderWidth: 1,

    borderColor: Colors.border,

    borderRadius: Radius.full,

    paddingHorizontal: Spacing.md,

    minHeight: 48,

    gap: Spacing.sm,

  },

  input: {

    flex: 1,

    fontSize: 16,

    color: Colors.textPrimary,

    paddingVertical: Spacing.sm,

  },

});