import React from 'react';

import { View } from 'react-native';

import {
  AppCard,
} from '@/components/ui';

import {
  ComponentSection,
  ExampleCard,
} from '../../components';

import {
  CARD_EXAMPLES,
} from './CardsSection.constants';

import {
  styles,
} from './CardsSection.styles';

export function CardsSection() {

  return (

    <ComponentSection
      title="Cards"
      description="Reusable cards built on top of AppSurface."
    >

      <ExampleCard>

        <View style={styles.list}>

          {CARD_EXAMPLES.map(card => (

            <AppCard
              key={card.title}
              title={card.title}
              subtitle={card.subtitle}
              icon={card.icon}
              variant={card.variant}
            />

          ))}

        </View>

      </ExampleCard>

    </ComponentSection>

  );

}

CardsSection.displayName = 'CardsSection';