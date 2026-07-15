import React from 'react';

import {
  View,
} from 'react-native';

import {
  AppButton,
  AppCard,
  AppText,
} from '@/components/ui';

import {
  ComponentSection,
} from '../../components';

import {
  DASHBOARD_STATS,
  QUICK_ACTIONS,
} from './DashboardSection.constants';

import {
  styles,
} from './DashboardSection.styles';

import type {
    IconName
} from '@/components/ui'

export function DashboardSection() {

  return (

    <ComponentSection
      title="Dashboard Showcase"
      description="Example composition of reusable dashboard widgets."
    >

      <View style={styles.section}>

        <AppText variant="h3">
          Statistics
        </AppText>

        {DASHBOARD_STATS.map((stat) => (

          <AppCard
            key={stat.title}
            title={stat.title}
            subtitle={stat.value}
            icon={stat.icon}
          />

        ))}

        <AppText variant="h3">
          Quick Actions
        </AppText>

        {QUICK_ACTIONS.map((action) => (

          <AppButton
            key={action.title}
            title={action.title}
            leftIcon={action.icon}
          />

        ))}

      </View>

    </ComponentSection>

  );

}

DashboardSection.displayName = 'DashboardSection';