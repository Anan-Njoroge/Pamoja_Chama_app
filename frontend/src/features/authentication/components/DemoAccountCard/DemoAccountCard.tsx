import React from 'react';

import {
  Pressable,
  View,
} from 'react-native';

import {
  AppCard,
  AppIcon,
  AppText,
} from '@/components/ui';

import { styles } from './DemoAccountCard.styles';

import type {
  DemoAccountCardProps,
} from './DemoAccountCard.types';

export function DemoAccountCard({
  title,
  phoneNumber,
  role,
  icon,
  onPress,
}: DemoAccountCardProps) {
  return (
    <Pressable
      onPress={() => onPress(phoneNumber)}
    >
      <AppCard>
        <View style={styles.row}>
          <AppIcon
            name={icon}
            size="lg"
            color="primary"
          />

          <View style={styles.content}>
            <AppText variant="button">
              {title}
            </AppText>

            <AppText
              variant="small"
              color="textSecondary"
            >
              {role}
            </AppText>

            <AppText
              variant="caption"
              color="textSecondary"
              style={styles.phone}
            >
              {phoneNumber}
            </AppText>
          </View>
        </View>
      </AppCard>
    </Pressable>
  );
}

DemoAccountCard.displayName =
  'DemoAccountCard';