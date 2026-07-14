import React from 'react';

import {
  Pressable,
  View,
} from 'react-native';

import {
  AppIcon,
  AppSurface,
  AppText,
} from '@/components/ui';

import { styles } from './DasboardHeader.styles';

import type {
  DashboardHeaderProps,
} from './DashboardHeader.types';

export function DashboardHeader({
  greeting,
  userName,
  chamaName,

  showNotifications = true,
  showProfile = true,

  glass = true,

  onNotificationPress,
  onProfilePress,
}: DashboardHeaderProps) {
  return (
    <AppSurface
      variant={glass ? 'glass' : 'card'}
      padding="none"
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.left}>
          <AppText
            variant="caption"
            color="textSecondary"
            weight="medium"
            style={styles.greeting}
          >
            {greeting} 👋
          </AppText>

          <AppText
            variant="h2"
            weight="bold"
            style={styles.chama}
          >
            {chamaName}
          </AppText>

          <AppText
            variant="body"
            color="textSecondary"
            weight="medium"
            style={styles.username}
          >
            {userName}
          </AppText>
        </View>

        <View style={styles.actions}>
          {showNotifications && (
            <Pressable
              onPress={onNotificationPress}
              style={styles.iconButton}
            >
              <AppIcon
                name="notification"
                size="lg"
                color="primary"
              />
            </Pressable>
          )}

          {showProfile && (
            <Pressable
              onPress={onProfilePress}
              style={styles.iconButton}
            >
              <AppIcon
                name="profile"
                size="lg"
                color="primary"
              />
            </Pressable>
          )}
        </View>
      </View>
    </AppSurface>
  );
}