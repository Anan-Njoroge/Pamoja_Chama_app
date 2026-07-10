import React from 'react';

import {
  View,
} from 'react-native';

import {
  AppButton,
  AppCard,
  AppText,
} from '@/components/ui';

import { styles } from './PaymentProgress.styles';

import type { PaymentProgressProps } from './PaymentProgress.types';

export function PaymentProgress({

  title,

  amount,

  target,

  membersPaid,

  totalMembers,

  onRecordPayment,

}: PaymentProgressProps) {

  const progress = Math.min(amount / target, 1);

  return (

    <AppCard
      padding="none"
      style={styles.card}
    >

      <AppText
        variant="body"
        style={styles.title}
      >
        {title}
      </AppText>

      <AppText
        variant="h1"
        style={styles.amount}
      >
        KSh {amount.toLocaleString()}
      </AppText>

      <View style={styles.progressBackground}>

        <View
          style={[
            styles.progressFill,
            {
              width: `${progress * 100}%`,
            },
          ]}
        />

      </View>

      <View style={styles.footer}>

        <AppText
          variant="small"
          style={styles.members}
        >
          {membersPaid} of {totalMembers} members paid
        </AppText>

        <AppButton
          title="Record"
          size="sm"
          onPress={onRecordPayment}
          style={styles.button}
        />

      </View>

    </AppCard>

  );

}