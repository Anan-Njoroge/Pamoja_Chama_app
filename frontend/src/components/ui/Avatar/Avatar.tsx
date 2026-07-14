import React from 'react';

import {
  Image,
  View,
} from 'react-native';

import { AppText } from '../Text';

import {
  Colors,
} from '@/theme';

import {
  AVATAR_SIZES,
} from './Avatar.constants';

import {
  styles,
} from './Avatar.styles';

import type {
  AppAvatarProps,
} from './Avatar.types';

const AVATAR_COLORS = [
  Colors.avatarPurple,
  Colors.avatarBlue,
  Colors.avatarSky,
  Colors.avatarGreen,
  Colors.avatarTeal,
  Colors.avatarOrange,
  Colors.avatarRed,
  Colors.avatarViolet,
];

function getInitials(name: string) {
  return name
    .trim()
    .split(' ')
    .slice(0, 2)
    .map(word => word.charAt(0).toUpperCase())
    .join('');
}

function getAvatarColor(name: string) {
  const hash = name
    .split('')
    .reduce(
      (sum, char) => sum + char.charCodeAt(0),
      0,
    );

  return AVATAR_COLORS[
    hash % AVATAR_COLORS.length
  ];
}

export function AppAvatar({
  name,
  source,
  size = 'md',
  online = false,
  style,
}: AppAvatarProps) {

  const currentSize =
    AVATAR_SIZES[size];

  const backgroundColor =
    getAvatarColor(name);

  return (
    <View
      style={[
        styles.container,
        {
          width: currentSize.size,
          height: currentSize.size,
          borderRadius: currentSize.radius,
          backgroundColor,
        },
        style,
      ]}
    >
      {source ? (
        <Image
          source={source}
          style={styles.image}
        />
      ) : (
        <AppText
          variant={currentSize.fontVariant}
          color="white"
        >
          {getInitials(name)}
        </AppText>
      )}

      {online && (
        <View
          style={[
            styles.indicator,
            {
              width: currentSize.indicator,
              height: currentSize.indicator,
            },
          ]}
        />
      )}
    </View>
  );
}

AppAvatar.displayName = 'AppAvatar';