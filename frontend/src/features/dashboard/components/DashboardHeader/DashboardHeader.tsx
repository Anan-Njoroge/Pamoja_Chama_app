import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import {
  AppAvatar,
  AppIcon,
  AppText,
} from '@/components/ui';

import {
  Colors,
  Spacing,
} from '@/theme';

export interface DashboardHeaderProps {
  userName: string;

  notificationCount?: number;

  onNotificationsPress?: () => void;

  avatarUri?: string;
}

export function DashboardHeader({
  userName,
  notificationCount = 0,
  onNotificationsPress,
  avatarUri,
}: DashboardHeaderProps) {
  return (
    <View style={styles.container}>
      <View>
        <AppText
          variant="body"
          color="white"
        >
          Hi! {userName} 👋
        </AppText>

        <AppText
          variant="small"
          color="white"
          style={styles.subtitle}
        >
          Welcome back to Pamoja Chama
        </AppText>
      </View>

      <View style={styles.right}>
        <AppIcon
          name="bell"
          size="lg"
          color="white"
          onPress={onNotificationsPress}
        />

        {notificationCount > 0 && (
          <View style={styles.badge}>
            <AppText
              variant="caption"
              color="white"
            >
              {notificationCount > 9
                ? '9+'
                : notificationCount}
            </AppText>
          </View>
        )}

        <AppAvatar
          size="md"
          name={userName}
          imageUri={avatarUri}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: Spacing.lg,

    paddingTop: Spacing.lg,
  },

  subtitle: {
    marginTop: 4,

    opacity: 0.85,
  },

  right: {
    flexDirection: 'row',

    alignItems: 'center',

    gap: Spacing.md,
  },

  badge: {
    position: 'absolute',

    top: -4,

    right: 44,

    backgroundColor: Colors.pending,

    borderRadius: 999,

    minWidth: 18,

    height: 18,

    justifyContent: 'center',

    alignItems: 'center',

    paddingHorizontal: 4,

    zIndex: 10,
  },
});

DashboardHeader.displayName = 'DashboardHeader';