import React from 'react';

import {
  View,
} from 'react-native';

import {
  AppIcon,
  AppText,
} from '@/components/ui';

import {
  ComponentSection,
  ExampleCard,
} from '../../components';

import {
  ICON_CATEGORIES,
} from './IconsSection.constants';

import {
  styles,
} from './IconsSection.styles';

export function IconsSection() {

  return (

    <ComponentSection
      title="Icons"
      description="All reusable icons available throughout the application."
    >

      {ICON_CATEGORIES.map((category) => (

        <ExampleCard
          key={category.title}
          title={category.title}
        >

          <View style={styles.grid}>

            {category.icons.map((icon) => (

              <View
                key={icon}
                style={styles.item}
              >

                <AppIcon
                  name={icon}
                  size="lg"
                  color="primary"
                />

                <AppText
                  variant="caption"
                  color="textSecondary"
                  style={styles.label}
                >
                  {icon}
                </AppText>

              </View>

            ))}

          </View>

        </ExampleCard>

      ))}

    </ComponentSection>

  );

}

IconsSection.displayName = 'IconsSection';