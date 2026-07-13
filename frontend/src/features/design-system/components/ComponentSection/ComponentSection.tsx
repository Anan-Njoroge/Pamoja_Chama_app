import React from 'react';

import {
  View,
} from 'react-native';

import {
  AppText,
} from '@/components/ui';

import {
  styles,
} from './ComponentSection.styles';

import type {
  ComponentSectionProps,
} from './ComponentSection.types';

export function ComponentSection({

  title,

  description,

  children,

}: ComponentSectionProps) {

  return (

    <View style={styles.container}>

      <AppText variant="h2">
        {title}
      </AppText>

      {description && (

        <AppText
          variant="body"
          color="textSecondary"
          style={styles.description}
        >
          {description}
        </AppText>

      )}

      {children}

    </View>

  );

}

ComponentSection.displayName = 'ComponentSection';