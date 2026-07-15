import React from 'react';

import {

  ComponentSection,

  ExampleCard,

} from '../../components';

import {

  TypographyPreview,

} from '../../components/previews/TypographyPreview';

import {

  TYPOGRAPHY_EXAMPLES,

} from './TypographySection.constants';

export function TypographySection() {

  return (

    <ComponentSection

      title="Typography"

      description="Typography tokens used throughout the application."

    >

      <ExampleCard

        title="DM Sans"

        description="All application text should use the DM Sans font family."

      >

        {TYPOGRAPHY_EXAMPLES.map((example) => (

          <TypographyPreview

            key={example.id}

            label={example.label}

            variant={example.variant}

            sample={example.sample}

          />

        ))}

      </ExampleCard>

    </ComponentSection>

  );

}

TypographySection.displayName = 'TypographySection';