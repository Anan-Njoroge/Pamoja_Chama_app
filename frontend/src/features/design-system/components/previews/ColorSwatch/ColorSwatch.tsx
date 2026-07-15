import React from 'react';

import { View } from 'react-native';

import {
  AppSurface,
  AppText,
} from '@/components/ui';

import { Colors } from '@/theme';

import { styles } from './ColorSwatch.styles';

import type {
  ColorSwatchProps,
} from './ColorSwatch.types';

export function ColorSwatch({

  name,

  color,

}: ColorSwatchProps) {

  return (

    <View style={styles.container}>

      <AppSurface
        style={[
          styles.swatch,
          {
            backgroundColor: Colors[color],
          },
        ]}
      />

      <AppText
        variant="small"
        style={styles.name}
      >
        {name}
      </AppText>

      <AppText
        variant="caption"
        color="textSecondary"
      >
        {Colors[color]}
      </AppText>

    </View>

  );

}

ColorSwatch.displayName = 'ColorSwatch';