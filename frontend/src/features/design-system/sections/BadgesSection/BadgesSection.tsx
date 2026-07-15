import React from 'react';

import {
  View,
} from 'react-native';

import {
  AppBadge,
} from '@/components/ui';

import {
  ComponentSection,
  ExampleCard,
} from '../../components';

import {
  BADGE_EXAMPLES,
} from './BadgesSection.constants';

import {
  styles,
} from './BadgesSection.styles';

export function BadgesSection() {

  return (

    <ComponentSection
      title="Badges"
      description="Status badges used throughout the application."
    >

      <ExampleCard>

        <View style={styles.container}>

          {BADGE_EXAMPLES.map((badge) => (

            <AppBadge
              key={badge.label}
              label={badge.label}
              variant={badge.variant}
            />

          ))}

        </View>

      </ExampleCard>

    </ComponentSection>

  );

}

BadgesSection.displayName = 'BadgesSection';