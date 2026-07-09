/**
 * ============================================================================
 * AppCard
 * ============================================================================
 *
 * A reusable card component built on top of AppSurface.
 *
 * ============================================================================
 */

import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { AppSurface } from '../Surface';
import { AppIcon, IconName } from '../Icon';

import {
  Colors,
  Spacing,
  Typography,
} from '@/theme';

import type { AppSurfaceProps } from '../Surface';

import type { ViewComponentProps } from '@/types';

export interface AppCardProps extends AppSurfaceProps, ViewComponentProps {
  /**
   * Card title
   */
  title?: string;

  /**
   * Small description below the title
   */
  subtitle?: string;

  /**
   * Optional leading icon
   */
  icon?: IconName;

  /**
   * Optional element displayed on the far right
   *
   * Example:
   * Badge
   * Chevron
   * Button
   */
  rightElement?: React.ReactNode;
}

export function AppCard({
  title,
  subtitle,
  icon,
  rightElement,
  children,
  ...surfaceProps
}: AppCardProps) {
  return (
    <AppSurface
      variant="card"
      {...surfaceProps}
    >
      {(title || subtitle || icon || rightElement) && (
        <View style={styles.header}>
          <View style={styles.leftSection}>
            {icon && (
              <View style={styles.iconContainer}>
                <AppIcon
                  name={icon}
                  size="lg"
                  color="primary"
                />
              </View>
            )}

            <View style={styles.textContainer}>
              {title && (
                <Text style={styles.title}>
                  {title}
                </Text>
              )}

              {subtitle && (
                <Text style={styles.subtitle}>
                  {subtitle}
                </Text>
              )}
            </View>
          </View>

          {rightElement && (
            <View style={styles.rightSection}>
              {rightElement}
            </View>
          )}
        </View>
      )}

      {children}
    </AppSurface>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: Spacing.md,
  },

  leftSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  rightSection: {
    marginLeft: Spacing.md,
  },

  iconContainer: {
    marginRight: Spacing.sm,
  },

  textContainer: {
    flex: 1,
  },

  title: {
    ...Typography.h3,
    color: Colors.textPrimary,
  },

  subtitle: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: 2,
  },
});

AppCard.displayName = 'AppCard';