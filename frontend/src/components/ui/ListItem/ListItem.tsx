/**
 * ============================================================================
 * AppListItem
 * ============================================================================
 *
 * PURPOSE
 * -------
 * AppListItem is the standard row component used throughout the
 * Pamoja Chama application.
 *
 * Instead of creating custom layouts for members, payments,
 * notifications, settings and transactions, every screen should use
 * AppListItem.
 *
 * BENEFITS
 * --------
 * ✓ Consistent spacing
 * ✓ Consistent typography
 * ✓ Consistent touch feedback
 * ✓ Flexible leading/trailing components
 * ✓ Easy to maintain
 *
 * EXAMPLES
 * --------
 *
 * Member
 *
 * ┌──────────────────────────────────────┐
 * │ 👤 John Mwangi               >       │
 * │    Treasurer                         │
 * └──────────────────────────────────────┘
 *
 * Notification
 *
 * ┌──────────────────────────────────────┐
 * │ 🔔 Payment Received          New      │
 * │    2 minutes ago                     │
 * └──────────────────────────────────────┘
 *
 * ============================================================================
 */

import React from 'react';

import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import { AppText } from '../Text';

import {
  Colors,
  Spacing,
} from '@/theme';

import type { PressableComponentProps } from '@/types';

export interface AppListItemProps {

  /**
   * Main title.
   */
  title: string;

  /**
   * Optional subtitle.
   */
  subtitle?: string;

  /**
   * Component shown on the left.
   *
   * Examples:
   * - Avatar
   * - Icon
   * - Image
   */
  leading?: React.ReactNode;

  /**
   * Component shown on the right.
   *
   * Examples:
   * - Badge
   * - Chevron
   * - Switch
   * - Button
   */
  trailing?: React.ReactNode;

  /**
   * Called when the row is pressed.
   */
  onPress?: () => void;

  /**
   * Called on long press.
   */
  onLongPress?: () => void;

  /**
   * Disable interactions.
   */
  disabled?: boolean;

  /**
   * Display bottom divider.
   */
  showDivider?: boolean;

  /**
   * Additional styling.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Used for automated testing.
   */
  testID?: string;
}

export function AppListItem({
  title,
  subtitle,
  leading,
  trailing,
  onPress,
  onLongPress,
  disabled = false,
  showDivider = false,
  style,
  testID,
}: AppListItemProps) {

  return (
    <Pressable
      testID={testID}
      disabled={disabled}
      onPress={onPress}
      onLongPress={onLongPress}
      android_ripple={{
        color: Colors.primaryLight,
      }}
      style={({ pressed }) => [
        styles.container,

        showDivider && styles.divider,

        disabled && styles.disabled,

        pressed && styles.pressed,

        style,
      ]}
    >
      {/* ------------------------------------------------------------------ */}
      {/* Leading */}
      {/* ------------------------------------------------------------------ */}

      {leading && (
        <View style={styles.leading}>
          {leading}
        </View>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Body */}
      {/* ------------------------------------------------------------------ */}

      <View style={styles.content}>

        <AppText variant="body">
          {title}
        </AppText>

        {subtitle && (

          <AppText
            variant="small"
            color="textSecondary"
            style={styles.subtitle}
          >
            {subtitle}
          </AppText>

        )}

      </View>

      {/* ------------------------------------------------------------------ */}
      {/* Trailing */}
      {/* ------------------------------------------------------------------ */}

      {trailing && (

        <View style={styles.trailing}>
          {trailing}
        </View>

      )}

    </Pressable>
  );
}

const styles = StyleSheet.create({

  container: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: Colors.white,

    paddingHorizontal: Spacing.lg,

    paddingVertical: Spacing.md,

    minHeight: 72,
  },

  leading: {

    marginRight: Spacing.md,

    justifyContent: 'center',

    alignItems: 'center',
  },

  content: {

    flex: 1,

    justifyContent: 'center',
  },

  subtitle: {

    marginTop: Spacing.xs,
  },

  trailing: {

    marginLeft: Spacing.md,

    justifyContent: 'center',

    alignItems: 'center',
  },

  divider: {

    borderBottomWidth: 1,

    borderBottomColor: Colors.divider,
  },

  disabled: {

    opacity: 0.45,
  },

  pressed: {

    opacity: 0.85,
  },

});