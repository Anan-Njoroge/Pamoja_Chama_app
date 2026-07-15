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

      {title && (
        <AppText 
        variant="small"
        >
          {title}
        </AppText>
      )}

      {description &&  (
        <AppText
        variant="small"
        color="textSecondary"
        >
          {description}
        </AppText>
      )}

      {children}

    </AppCard>

  );

}

ExampleCard.displayName = 'ExampleCard';