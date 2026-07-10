import React from 'react';

import {
  View,
} from 'react-native';

import {

  AppIcon,

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

  onNotificationPress,

  onProfilePress,

}: DashboardHeaderProps) {

  return (

    <View style={styles.container}>

      <View style={styles.left}>

        <AppText
          variant="small"
          color="textSecondary"
          style={styles.greeting}
        >
          {greeting}, {userName}
        </AppText>

        <AppText
          variant="h2"
          style={styles.chama}
        >
          {chamaName}
        </AppText>

      </View>

      <View style={styles.actions}>

        <AppIcon
          name="notification"
          size="lg"
          onPress={onNotificationPress}
          accessibilityLabel="Notifications"
        />

        <AppIcon
          name="profile"
          size="lg"
          onPress={onProfilePress}
          accessibilityLabel="Profile"
        />

      </View>

    </View>

  );

}