/**
 * ============================================================================
 * AppBadge
 * ============================================================================
 *
 * PURPOSE
 * -------
 * AppBadge is a compact component used to display a status, category or role.
 *
 * It appears throughout the Pamoja Chama application in transaction lists,
 * member lists, payment records, loan management, and notifications.
 *
 * EXAMPLES
 * --------
 *
 * <AppBadge label="Paid" variant="success" />
 *
 * <AppBadge
 *   label="Pending"
 *   variant="pending"
 * />
 *
 * <AppBadge
 *   label="Treasurer"
 *   variant="primary"
 *   icon="profile"
 * />
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

import { AppIcon, IconName } from '../Icon';
import { AppText } from '../Text';

import {
  Colors,
  Radius,
  Spacing,
} from '@/theme';

export type BadgeVariant =
  | 'primary'
  | 'success'
  | 'pending'
  | 'danger'
  | 'neutral'
  | 'outline';

export type BadgeSize =
  | 'sm'
  | 'md'
  | 'lg';

interface AppBadgeProps {
  label: string;

  variant?: BadgeVariant;

  size?: BadgeSize;

  icon?: IconName;

  style?: StyleProp<ViewStyle>;
}

const VARIANTS = {
  primary: {
    background: Colors.primaryLight,
    border: Colors.primary,
    text: Colors.primary,
  },

  success: {
    background: Colors.successBg,
    border: Colors.success,
    text: Colors.success,
  },

  pending: {
    background: Colors.pendingBg,
    border: Colors.pendingBorder,
    text: Colors.pendingBorder,
  },

  danger: {
    background: Colors.dangerBg,
    border: Colors.danger,
    text: Colors.danger,
  },

  neutral: {
    background: Colors.background,
    border: Colors.border,
    text: Colors.textSecondary,
  },

  outline: {
    background: Colors.transparent,
    border: Colors.primary,
    text: Colors.primary,
  },
};

const SIZES = {
  sm: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    text: 'caption' as const,
    icon: 'xs' as const,
  },

  md: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    text: 'small' as const,
    icon: 'sm' as const,
  },

  lg: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    text: 'body' as const,
    icon: 'md' as const,
  },
};

export function AppBadge({
  label,
  variant = 'primary',
  size = 'md',
  icon,
  style,
}: AppBadgeProps) {

  const currentVariant = VARIANTS[variant];
  const currentSize = SIZES[size];

  return (
    <View
      style={[
        styles.container,

        {
          backgroundColor: currentVariant.background,
          borderColor: currentVariant.border,
          paddingVertical: currentSize.paddingVertical,
          paddingHorizontal: currentSize.paddingHorizontal,
        },

        style,
      ]}
    >
      {icon && (
        <AppIcon
          name={icon}
          size={currentSize.icon}
          color={
            variant === 'outline'
              ? 'primary'
              : variant === 'neutral'
              ? 'textSecondary'
              : variant === 'pending'
              ? 'pendingBorder'
              : variant
          }
        />
      )}

      <AppText
        variant={currentSize.text}
        style={[
          styles.label,
          {
            color: currentVariant.text,
          },
        ]}
      >
        {label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {

    flexDirection: 'row',

    alignItems: 'center',

    alignSelf: 'flex-start',

    borderRadius: Radius.pill,

    borderWidth: 1,
  },

  label: {

    marginLeft: Spacing.xs,

    fontWeight: '600',
  },

});