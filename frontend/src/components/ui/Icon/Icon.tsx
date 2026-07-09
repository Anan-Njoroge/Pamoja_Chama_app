import React from 'react';

import { Pressable } from 'react-native';

import { Colors } from '@/theme';

import {
  ICON_MAP,
  ICON_SIZE_MAP,
  ICON_TONE_MAP,
} from './Icon.constants';

import type { AppIconProps } from './Icon.types';

export function AppIcon({
  name,
  size = 'md',
  color,
  tone = 'default',
  strokeWidth = 2,
  style,
  onPress,
  accessibilityLabel,
}: AppIconProps) {
  const Icon = ICON_MAP[name];

  if (!Icon) {
    return null;
  }

  const resolvedColor = color
    ? Colors[color]
    : Colors[ICON_TONE_MAP[tone]];

  const icon = (
    <Icon
      size={ICON_SIZE_MAP[size]}
      color={resolvedColor}
      strokeWidth={strokeWidth}
    />
  );

  if (!onPress) {
    return icon;
  }

  return (
    <Pressable
      onPress={onPress}
      style={style}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      hitSlop={8}
    >
      {icon}
    </Pressable>
  );
}

AppIcon.displayName = 'AppIcon';