import React from 'react';

import { View } from 'react-native';

import { AppText } from '@/components/ui';

import { styles } from './TypographyPreview.styles';

import type {

  TypographyPreviewProps,

} from './TypographyPreview.types';

export function TypographyPreview({

  label,

  variant,

  sample,

}: TypographyPreviewProps) {

  return (

    <View style={styles.container}>

      <AppText

        variant="caption"

        color="textSecondary"

        style={styles.label}

      >

        {label}

      </AppText>

      <AppText variant={variant}>

        {sample}

      </AppText>

    </View>

  );

}

TypographyPreview.displayName = 'TypographyPreview';