import React from 'react';

import {
  View,
} from 'react-native';

import {

  AppBadge,

  AppText,

} from '@/components/ui';

import {

  styles,

} from './SectionHeader.styles';

import type {

  SectionHeaderProps,

} from './SectionHeader.types';

export function SectionHeader({

  title,

  subtitle,

  version,

}: SectionHeaderProps) {

  return (

    <View style={styles.container}>

      <View style={styles.topRow}>

        <AppText variant="h1">

          {title}

        </AppText>

        {version && (

          <AppBadge
            label={version}
          >

          </AppBadge>

        )}

      </View>

      {subtitle && (

        <AppText
          variant="body"
          color="textSecondary"
          style={styles.subtitle}
        >
          {subtitle}
        </AppText>

      )}

    </View>

  );

}

SectionHeader.displayName = 'SectionHeader';