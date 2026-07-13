/**
 * ============================================================================
 * AppCard
 * ============================================================================
 *
 * Premium reusable card component.
 *
 * Built on top of AppSurface.
 *
 * ============================================================================
 */

import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { AppSurface } from '../Surface';
import { AppIcon } from '../Icon';
import { AppText } from '../Text';

import {
  Colors,
  Radius,
  Shadows,
  Spacing,
  Typography,
} from '@/theme';

import type { IconName } from '../Icon';
import type { AppSurfaceProps } from '../Surface';
import type { ViewComponentProps } from '@/types';

export interface AppCardProps
  extends AppSurfaceProps,
    ViewComponentProps {
  title?: string;

  subtitle?: string;

  icon?: IconName;

  rightElement?: React.ReactNode;
}

export function AppCard({
  title,
  subtitle,
  icon,
  rightElement,
  children,
  style,
  ...surfaceProps
}: AppCardProps) {
  return (
    <AppSurface
      variant="card"
      style={[styles.card, style]}
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
                  tone="primary"
                />
              </View>
            )}

            <View style={styles.textContainer}>
              {title && (
                <AppText
                  variant="h3"
                  weight="semibold"
                >
                  {title}
                </AppText>
              )}

              {subtitle && (
                <AppText
                  variant="caption"
                  color="textSecondary"
                >
                  {subtitle}
                </AppText>
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
  card: {
    borderRadius: Radius.xl,

    backgroundColor: Colors.surface,

    ...Shadows.sm,
  },

  header: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    marginBottom: Spacing.lg,
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
    width: 44,

    height: 44,

    borderRadius: 22,

    backgroundColor: Colors.primaryLight,

    justifyContent: 'center',

    alignItems: 'center',

    marginRight: Spacing.md,
  },

  textContainer: {
    flex: 1,
  },
});

AppCard.displayName = 'AppCard';