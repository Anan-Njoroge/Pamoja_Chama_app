/**
 * ============================================================================
 * AppEmptyState
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Displays a friendly message when there is no content available.
 *
 * Examples:
 *
 * ✓ No members
 * ✓ No notifications
 * ✓ No contributions
 * ✓ No loans
 * ✓ No search results
 *
 * Instead of showing a blank screen, this component explains the
 * situation and can optionally provide an action for the user.
 *
 * ============================================================================
 */

import React from 'react';

import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import { AppButton } from '../Button';
import { AppIcon, type IconName } from '../Icon';
import { AppText } from '../Text';

import {
  Colors,
  Spacing,
} from '@/theme';

import type { ViewComponentProps } from '@/types';

interface AppEmptyStateProps {

  /**
   * Main heading.
   */
  title: string;

  /**
   * Supporting description.
   */
  description?: string;

  /**
   * Optional illustration icon.
   */
  icon?: IconName;

  /**
   * Optional action button.
   */
  buttonTitle?: string;

  /**
   * Called when the action button is pressed.
   */
  onPress?: () => void;

  /**
   * Additional styling.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Used for automated testing.
   */
  testID?: string;
}

export function AppEmptyState({
  title,
  description,
  icon = 'folder',
  buttonTitle,
  onPress,
  style,
  testID,
}: AppEmptyStateProps) {

  return (

    <View
      testID={testID}
      style={[
        styles.container,
        style,
      ]}
    >

      {/* ------------------------------------------------------------------ */}
      {/* Illustration */}
      {/* ------------------------------------------------------------------ */}

      <View style={styles.iconContainer}>
        <AppIcon
          name={icon}
          size="xxl"
          color="disabledText"
          strokeWidth={1.75}
        />
      </View>

      {/* ------------------------------------------------------------------ */}
      {/* Title */}
      {/* ------------------------------------------------------------------ */}

      <AppText
        variant="h3"
        style={styles.title}
      >
        {title}
      </AppText>

      {/* ------------------------------------------------------------------ */}
      {/* Description */}
      {/* ------------------------------------------------------------------ */}

      {description && (
        <AppText
          variant="body"
          color="textSecondary"
          style={styles.description}
        >
          {description}
        </AppText>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Action */}
      {/* ------------------------------------------------------------------ */}

      {buttonTitle && onPress && (
        <AppButton
          title={buttonTitle}
          onPress={onPress}
          style={styles.button}
        />
      )}

    </View>

  );
}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

    paddingHorizontal: Spacing.xl,
  },

  iconContainer: {

    marginBottom: Spacing.lg,
  },

  title: {

    textAlign: 'center',
  },

  description: {

    textAlign: 'center',

    marginTop: Spacing.sm,

    maxWidth: 320,
  },

  button: {

    marginTop: Spacing.xl,

    minWidth: 180,
  },

});