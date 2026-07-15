import React from 'react';

import { View } from 'react-native';

import {
  AppIcon,
  AppText,
} from '@/components/ui';

import { Colors } from '@/theme';

import {
  BADGE_SIZES,
  BADGE_VARIANTS,
} from './Badges.constants';

import { styles } from './Badges.styles';

import type {
  AppBadgeProps,
  BadgeVariant,
} from './Badge.types';

export function AppBadge({
  label,
  variant = 'primary',
  size = 'md',
  icon,
  style,
}: AppBadgeProps) {
  const currentVariant =
    BADGE_VARIANTS[variant];

  const currentSize =
    BADGE_SIZES[size];

  const iconColor: BadgeVariant | 'textSecondary' | 'primary' | 'pendingBorder' =
    variant === 'outline'
      ? 'primary'
      : variant === 'neutral'
      ? 'textSecondary'
      : variant === 'pending'
      ? 'pendingBorder'
      : variant;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            currentVariant.background,

          borderColor:
            currentVariant.border,

          paddingVertical:
            currentSize.paddingVertical,

          paddingHorizontal:
            currentSize.paddingHorizontal,
        },
        style,
      ]}
    >
      {icon && (
        <AppIcon
          name={icon}
          size={currentSize.iconSize}
          color={iconColor}
        />
      )}

      <AppText
        variant={currentSize.textVariant}
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

AppBadge.displayName = 'AppBadge';