/**
 * ============================================================================
 * AppHeader Component
 * ============================================================================
 *
 * PURPOSE
 * -------
 * A reusable page header used across the application.
 *
 * This component supports:
 *
 * • Title
 * • Optional subtitle
 * • Optional left component
 * • Optional right component
 *
 * Future versions will support:
 *
 * • Back button
 * • Blur / Glass effect
 * • Sticky header
 * • Notifications
 * • Profile avatar
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

import { AppText } from '../Text';

import {
  Colors,
  Spacing,
} from '@/theme';

interface AppHeaderProps {
  title: string;

  subtitle?: string;

  leftComponent?: React.ReactNode;

  rightComponent?: React.ReactNode;

  style?: StyleProp<ViewStyle>;
}

export default function AppHeader({
  title,
  subtitle,
  leftComponent,
  rightComponent,
  style,
}: AppHeaderProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.leftSection}>
        {leftComponent}

        <View>
          <AppText variant="h2">
            {title}
          </AppText>

          {subtitle && (
            <AppText
              variant="small"
              color="textSecondary"
            >
              {subtitle}
            </AppText>
          )}
        </View>
      </View>

      {rightComponent && (
        <View>
          {rightComponent}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: Spacing.lg,
  },

  leftSection: {
    flexDirection: 'row',

    alignItems: 'center',

    gap: Spacing.sm,
  },
});