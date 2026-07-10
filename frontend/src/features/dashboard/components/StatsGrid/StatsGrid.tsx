import React from 'react';

import {

  View,

} from 'react-native';

import {

  AppCard,

  AppIcon,

  AppText,

} from '@/components/ui';

import { styles } from './StatsGrid.styles';

import type {

  StatsGridProps,

} from './StatsGrid.types';

export function StatsGrid({

  stats,

}: StatsGridProps) {

  return (

    <View style={styles.container}>

      {stats.map((item) => (

        <AppCard

          key={item.id}

          style={styles.card}

        >

          <View style={styles.icon}>

            <AppIcon

              name={item.icon}

              size="lg"

              color="primary"

            />

          </View>

          <AppText

            variant="small"

            color="textSecondary"

            style={styles.title}

          >

            {item.title}

          </AppText>

          <AppText variant="h3">

            {item.value}

          </AppText>

        </AppCard>

      ))}

    </View>

  );

}