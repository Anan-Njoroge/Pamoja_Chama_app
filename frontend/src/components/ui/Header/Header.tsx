/**
 * ============================================================================
 * AppHeader
 * ============================================================================
 *
 * PURPOSE
 * -------
 * AppHeader provides a consistent header layout for every screen in the
 * Pamoja Chama application.
 *
 * Rather than every screen manually arranging a back button, title,
 * notification icon, and profile icon, this component standardizes the
 * layout while remaining flexible.
 *
 * LAYOUT
 * ------
 *
 * ┌────────────────────────────────────────────┐
 * │ ← Back   Title              Right Actions  │
 * │          Subtitle                        │
 * └────────────────────────────────────────────┘
 *
 * FEATURES
 * --------
 * ✓ Optional back button
 * ✓ Optional subtitle
 * ✓ Custom left component
 * ✓ Multiple right actions
 * ✓ Safe Area support
 * ✓ Optional bottom divider
 * ✓ Theme-aware styling
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

import { SafeAreaView } from 'react-native-safe-area-context';

import { AppText } from '../Text';

import {
  Colors,
  Shadows,
  Spacing,
} from '@/theme';

interface HeaderAction {
  icon: React.ReactNode;

  onPress: () => void;
}

interface AppHeaderProps {

  /**
   * Main title.
   */
  title: string;

  /**
   * Optional subtitle.
   */
  subtitle?: string;

  /**
   * Show back button.
   */
  showBackButton?: boolean;

  /**
   * Back button icon.
   */
  backIcon?: React.ReactNode;

  /**
   * Back button action.
   */
  onBackPress?: () => void;

  /**
   * Replace the whole left section.
   */
  leftComponent?: React.ReactNode;

  /**
   * Right-side actions.
   */
  rightActions?: HeaderAction[];

  /**
   * Show divider below header.
   */
  showDivider?: boolean;

  style?: StyleProp<ViewStyle>;
}

export function AppHeader({
  title,
  subtitle,
  showBackButton = false,
  backIcon,
  onBackPress,
  leftComponent,
  rightActions = [],
  showDivider = false,
  style,
}: AppHeaderProps) {
  return (
    <SafeAreaView
      edges={['top']}
      style={[
        styles.safeArea,
        style,
      ]}
    >
      <View
        style={[
          styles.container,

          showDivider && styles.divider,
        ]}
      >
        <View style={styles.leftSection}>
          {leftComponent ? (
            leftComponent
          ) : showBackButton ? (
            <Pressable
              onPress={onBackPress}
              hitSlop={10}
              style={styles.backButton}
            >
              {backIcon}
            </Pressable>
          ) : null}
        </View>

        <View style={styles.centerSection}>
          <AppText variant="h3">
            {title}
          </AppText>

          {subtitle && (
            <AppText
              variant="caption"
              color="textSecondary"
            >
              {subtitle}
            </AppText>
          )}
        </View>

        <View style={styles.rightSection}>
          {rightActions.map((action, index) => (
            <Pressable
              key={index}
              onPress={action.onPress}
              hitSlop={10}
              style={styles.actionButton}
            >
              {action.icon}
            </Pressable>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safeArea: {
    backgroundColor: Colors.white,
  },

  container: {

    minHeight: 72,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    paddingHorizontal: Spacing.lg,

    paddingVertical: Spacing.md,

    backgroundColor: Colors.white,

    ...Shadows.sm,
  },

  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },

  leftSection: {

    width: 48,

    justifyContent: 'center',

    alignItems: 'flex-start',
  },

  centerSection: {

    flex: 1,

    alignItems: 'center',
  },

  rightSection: {

    width: 72,

    flexDirection: 'row',

    justifyContent: 'flex-end',

    alignItems: 'center',
  },

  backButton: {
    padding: Spacing.xs,
  },

  actionButton: {

    marginLeft: Spacing.md,

    padding: Spacing.xs,
  },

});