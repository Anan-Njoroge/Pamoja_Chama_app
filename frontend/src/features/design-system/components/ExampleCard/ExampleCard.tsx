import React from 'react';

import {

  AppCard,

  AppText,

} from '@/components/ui';

import {

  styles,

} from './ExampleCard.styles';

import type {

  ExampleCardProps,

} from './ExampleCard.types';

export function ExampleCard({

  title,

  description,

  children,

}: ExampleCardProps) {

  return (

    <AppCard>

      <AppText variant="h3">
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

    </AppCard>

  );

}

ExampleCard.displayName = 'ExampleCard';