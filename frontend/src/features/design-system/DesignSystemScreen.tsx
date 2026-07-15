import React from 'react';

import {

  ScrollView,

} from 'react-native';

import {

  AppScreen,

} from '@/components/ui';

import {

  ComponentSection,

} from './components/ComponentSection';

import {

  SectionHeader,

} from './components/SectionHeader';

import {

  DESIGN_SYSTEM,

} from './DesignSystem.constants';

import {

  styles,

} from './DesignSystem.styles';

import type {

  DesignSystemScreenProps,

} from './DesignSystem.types';
import { ButtonsSection } from './sections/ButtonsSection/ButtonsSection';
import { CardsSection } from './sections/CardsSection/CardsSection';
import { BadgesSection } from './sections/BadgesSection';
import { AvatarSection } from './sections/AvatarSection';
import { IconsSection } from './sections/IconsSection';

export function DesignSystemScreen({}: DesignSystemScreenProps) {

  return (

    <AppScreen>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        <SectionHeader

          title={DESIGN_SYSTEM.title}

          subtitle={DESIGN_SYSTEM.subtitle}

          version={DESIGN_SYSTEM.version}

        />

        <ComponentSection

          title="Typography"

          description="Text styles used throughout the application."

        >

        </ComponentSection>

        <ComponentSection

          title="Colors"

          description="Application design tokens."

        >

        </ComponentSection>

       <ButtonsSection/>

        <ComponentSection

          title="Inputs"

          description="Reusable form inputs."

        >

        </ComponentSection>

        <CardsSection/>

        <BadgesSection/>

       <AvatarSection/>

        <IconsSection/>

        <ComponentSection

          title="Dashboard"

          description="Dashboard widgets."

        >

        </ComponentSection>

      </ScrollView>

    </AppScreen>

  );

}

DesignSystemScreen.displayName = 'DesignSystemScreen';