import React from 'react';

import {
  View,
} from 'react-native';

import {
  AppAvatar,
  AppText,
} from '@/components/ui';

import {
  ComponentSection,
  ExampleCard,
} from '../../components';

import {
  AVATAR_EXAMPLES,
  ONLINE_AVATARS,
} from './AvatarSection.constants';

import {
  styles,
} from './AvatarSection.styles';

export function AvatarSection() {

  return (

    <ComponentSection
      title="Avatars"
      description="Profile avatars with automatic initials, colour generation and online status."
    >

      <ExampleCard title="Avatar Sizes">

        <View style={styles.row}>

          {AVATAR_EXAMPLES.map((avatar) => (

            <View
              key={avatar.name}
              style={styles.column}
            >

              <AppAvatar
                name={avatar.name}
                size={avatar.size}
              />

              <AppText
                variant="caption"
                color="textSecondary"
              >
                {avatar.size.toUpperCase()}
              </AppText>

            </View>

          ))}

        </View>

      </ExampleCard>

      <ExampleCard title="Online Status">

        <View style={styles.row}>

          {ONLINE_AVATARS.map((avatar) => (

            <AppAvatar
              key={avatar.name}
              name={avatar.name}
              size={avatar.size}
              online
            />

          ))}

        </View>

      </ExampleCard>

    </ComponentSection>

  );

}

AvatarSection.displayName = 'AvatarSection';