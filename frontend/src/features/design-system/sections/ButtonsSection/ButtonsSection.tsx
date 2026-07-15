import React from 'react';

import { View } from 'react-native';

import {
  AppButton,
  AppText,
} from '@/components/ui';

import {
  ComponentSection,
  ExampleCard,
} from '../../components';

import {
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from './ButtonsSection.constants';

import { styles } from './ButtonsSection.styles';

export function ButtonsSection() {

  return (

    <ComponentSection
      title="Buttons"
      description="All button variants used throughout the application."
    >

      <ExampleCard>

        {BUTTON_SIZES.map(size => (

          <View
            key={size}
            style={styles.group}
          >

            <AppText
              variant="small"
              style={styles.title}
            >
              {size.toUpperCase()}
            </AppText>

            <View style={styles.row}>

              {BUTTON_VARIANTS.map(variant => (

                <AppButton
                  key={`${size}-${variant}`}
                  title={variant}
                  size={size}
                  variant={variant}
                  fullWidth={false}
                  onPress={() => {}}
                />

              ))}

            </View>

          </View>

        ))}

      </ExampleCard>

    </ComponentSection>

  );

}

ButtonsSection.displayName = 'ButtonsSection';