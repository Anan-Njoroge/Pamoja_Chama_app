import React from 'react';

import {
  Pressable,
  View,
} from 'react-native';

import {
  AppIcon,
  AppText,
} from '@/components/ui';

import {
  DEFAULT_BUTTON_TITLE,
} from './RecordPaymentButton.constants';

import { styles } from './RecordPaymentButton.styles';

import type {
  RecordPaymentButtonProps,
} from './RecordPaymentButton.types';

export function RecordPaymentButton({

  title = DEFAULT_BUTTON_TITLE,

  onPress,

}: RecordPaymentButtonProps) {

  return (

    <Pressable

      onPress={onPress}

      style={styles.container}

    >

      <View style={styles.button}>

        <View style={styles.icon}>

          <AppIcon
            name="plus"
            color="white"
          />

        </View>

        <AppText

          variant="button"

          color="white"

          weight="semibold"

        >

          {title}

        </AppText>

      </View>

    </Pressable>

  );

}