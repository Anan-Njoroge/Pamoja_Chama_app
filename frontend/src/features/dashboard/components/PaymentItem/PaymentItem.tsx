import React from 'react';

import {

  View,

} from 'react-native';

import {

  AppAvatar,

  AppText,

} from '@/components/ui';

import { styles } from './PaymentItem.styles';

import type {

  PaymentItemProps,

} from './PaymentItem.types';

export function PaymentItem({

  memberName,

  amount,

  description,

  date,

}: PaymentItemProps) {

  return (

    <View style={styles.container}>

      <AppAvatar
        name={memberName}
        size="md"
      />

      <View style={styles.content}>

        <View style={styles.topRow}>

          <AppText variant="body">

            {memberName}

          </AppText>

          <AppText
            variant="body"
            color="primary"
          >

            {amount}

          </AppText>

        </View>

        <AppText

          variant="small"

          color="textSecondary"

          style={styles.subtitle}

        >

          {description}

        </AppText>

        <AppText

          variant="caption"

          color="textSecondary"

          style={styles.date}

        >

          {date}

        </AppText>

      </View>

    </View>

  );

}