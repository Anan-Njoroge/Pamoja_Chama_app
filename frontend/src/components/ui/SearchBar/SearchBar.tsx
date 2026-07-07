/**
 * ============================================================================
 * AppSearchBar
 * ============================================================================
 *
 * PURPOSE
 * -------
 * A reusable search component used throughout the Pamoja Chama app.
 *
 * Unlike AppInput, this component is specifically designed for searching
 * lists of members, transactions, payments, notifications and reports.
 *
 * FEATURES
 * --------
 * ✓ Search icon
 * ✓ Clear button
 * ✓ Loading indicator
 * ✓ Controlled component
 * ✓ Focus styling
 * ✓ Disabled state
 * ✓ Optional filter button
 *
 * EXAMPLE
 * -------
 *
 * <AppSearchBar
 *   value={search}
 *   onChangeText={setSearch}
 *   placeholder="Search members..."
 * />
 *
 * ============================================================================
 */

import React, { useState } from 'react';

import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

import {
  Colors,
  Radius,
  Shadows,
  Spacing,
} from '@/theme';

import { AppIcon } from '../Icon';

interface AppSearchBarProps
  extends Omit<TextInputProps, 'style'> {

  loading?: boolean;

  disabled?: boolean;

  showClearButton?: boolean;

  showFilterButton?: boolean;

  onFilterPress?: () => void;

  style?: StyleProp<ViewStyle>;
}

export function AppSearchBar({
  value,
  onChangeText,
  placeholder = 'Search...',
  loading = false,
  disabled = false,
  showClearButton = true,
  showFilterButton = false,
  onFilterPress,
  style,
  ...props
}: AppSearchBarProps) {

  const [focused, setFocused] = useState(false);

  return (
    <View
      style={[
        styles.container,

        focused && styles.focused,

        disabled && styles.disabled,

        style,
      ]}
    >
      <AppIcon
        name="search"
        color="textPlaceholder"
      />

      <TextInput
        {...props}
        value={value}
        editable={!disabled}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Colors.textPlaceholder}
        style={styles.input}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />

      {loading && (
        <ActivityIndicator
          size="small"
          color={Colors.primary}
        />
      )}

      {!loading &&
        !!value &&
        showClearButton && (
          <Pressable
            hitSlop={10}
            onPress={() => onChangeText?.('')}
          >
            <AppIcon
              name="error"
              color="textPlaceholder"
              size="sm"
            />
          </Pressable>
        )}

      {!loading &&
        showFilterButton && (
          <Pressable
            hitSlop={10}
            onPress={onFilterPress}
          >
            <AppIcon
              name="more"
              color="primary"
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

    borderRadius: Radius.pill,

    borderWidth: 1,

    borderColor: Colors.border,

    paddingHorizontal: Spacing.md,

    minHeight: 52,

    ...Shadows.sm,
  },

  focused: {

    borderColor: Colors.primary,
  },

  disabled: {

    opacity: 0.6,
  },

  input: {

    flex: 1,

    marginHorizontal: Spacing.sm,

    fontSize: 16,

    color: Colors.textPrimary,
  },

});