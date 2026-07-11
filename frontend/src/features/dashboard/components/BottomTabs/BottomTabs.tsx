import React from 'react';

import {

  Pressable,

  View,

} from 'react-native';

import {

  AppIcon,

  AppText,

} from '@/components/ui';

import {

  DASHBOARD_TABS,

} from './BottomTabs.constants';

import {

  styles,

} from './BottomTabs.styles';

import type {

  BottomTabsProps,

} from './BottomTabs.types';

export function BottomTabs({

  activeTab,

  onTabPress,

}: BottomTabsProps) {

  return (

    <View style={styles.container}>

      {DASHBOARD_TABS.map(tab => {

        const active = tab.id === activeTab;

        return (

          <Pressable

            key={tab.id}

            onPress={() => onTabPress(tab.id)}

            style={styles.tab}

          >

            <AppIcon

              name={tab.icon}

              size="lg"

              color={

                active

                  ? 'primary'

                  : 'textPlaceholder'

              }

            />

            <AppText

              variant="caption"

              color={

                active

                  ? 'primary'

                  : 'textPlaceholder'

              }

              style={styles.label}

            >

              {tab.label}

            </AppText>

          </Pressable>

        );

      })}

    </View>

  );

}