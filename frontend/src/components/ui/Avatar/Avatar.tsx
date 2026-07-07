/**
 * ============================================================================
 * AppAvatar Component
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Displays a user's avatar throughout the application.
 *
 * The avatar supports:
 *
 * ✓ Profile image
 * ✓ Initials fallback
 * ✓ Online/offline indicator
 * ✓ Role badge
 * ✓ Multiple sizes
 * ✓ Theme colours
 *
 * WHY?
 * ----
 * Nearly every screen in the application displays users.
 * Having a single reusable Avatar component guarantees
 * consistent styling everywhere.
 *
 * ============================================================================
 */

import React from 'react';

import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import { AppText } from '../Text';
import { AppBadge } from '../Badge';

import {
  Colors,
  Radius,
  Spacing,
} from '@/theme';

export type AvatarSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl';

export type AvatarStatus =
  | 'online'
  | 'offline'
  | 'busy';

export type AvatarRole =
  | 'member'
  | 'treasurer'
  | 'admin';

interface AppAvatarProps {

  /**
   * Full name.
   * Used to generate initials.
   */
  name: string;

  /**
   * Optional profile image.
   */
  source?: ImageSourcePropType;

  /**
   * Avatar size.
   */
  size?: AvatarSize;

  /**
   * Optional presence indicator.
   */
  status?: AvatarStatus;

  /**
   * Optional role badge.
   */
  role?: AvatarRole;

  style?: StyleProp<ViewStyle>;
}

/**
 * Avatar dimensions.
 */
const SIZES: Record<AvatarSize, number> = {
  xs: 28,
  sm: 36,
  md: 48,
  lg: 64,
  xl: 88,
};

/**
 * Generate initials from a full name.
 *
 * "John Mwangi" → JM
 * "Mary" → M
 */
function getInitials(name: string) {

  return name
    .trim()
    .split(' ')
    .slice(0, 2)
    .map(part => part[0])
    .join('')
    .toUpperCase();
}
/**
 * Generates a deterministic avatar colour based on the user's name.
 *
 * Instead of returning hard-coded hex values, the colours come directly
 * from our design tokens (Colors.ts). This keeps every colour in the
 * application centralized and easy to maintain.
 */
function getAvatarColor(name: string) {
  const palette = [
    Colors.avatarPurple,
    Colors.avatarBlue,
    Colors.avatarSky,
    Colors.avatarGreen,
    Colors.avatarTeal,
    Colors.avatarOrange,
    Colors.avatarRed,
    Colors.avatarViolet,
  ];

  let hash = 0;

  for (let i = 0; i < name.length; i++) {
    hash += name.charCodeAt(i);
  }

  return palette[hash % palette.length];
}

export function AppAvatar({
  name,
  source,
  size = 'md',
  status,
  role,
  style,
}: AppAvatarProps) {

  const dimension = SIZES[size];

  return (
    <View style={style}>

      <View
        style={[
          styles.avatar,
          {
            width: dimension,
            height: dimension,
            borderRadius: dimension / 2,
            backgroundColor: getAvatarColor(name),
          },
        ]}
      >
        {source ? (

          <Image
            source={source}
            style={{
              width: dimension,
              height: dimension,
              borderRadius: dimension / 2,
            }}
          />

        ) : (

          <AppText
            variant={
              size === 'xs'
                ? 'caption'
                : size === 'sm'
                ? 'small'
                : 'body'
            }
            color="white"
          >
            {getInitials(name)}
          </AppText>

        )}

        {status && (
          <View
            style={[
              styles.status,

              {
                backgroundColor:
                  status === 'online'
                    ? Colors.success
                    : status === 'busy'
                    ? Colors.pending
                    : Colors.disabled,

                width: dimension * 0.22,
                height: dimension * 0.22,
                borderRadius: dimension,
              },
            ]}
          />
        )}

      </View>

      {role && (

        <View
          style={styles.roleBadge}
        >
          <AppBadge
            size="sm"
            label={
              role.charAt(0).toUpperCase() +
              role.slice(1)
            }
            variant={
              role === 'admin'
                ? 'danger'
                : role === 'treasurer'
                ? 'primary'
                : 'neutral'
            }
          />
        </View>

      )}

    </View>
  );
}

const styles = StyleSheet.create({

  avatar: {

    justifyContent: 'center',

    alignItems: 'center',

    overflow: 'hidden',
  },

  status: {

    position: 'absolute',

    right: 2,

    bottom: 2,

    borderWidth: 2,

    borderColor: Colors.white,
  },

  roleBadge: {

    marginTop: Spacing.xs,

    alignItems: 'center',
  },

});