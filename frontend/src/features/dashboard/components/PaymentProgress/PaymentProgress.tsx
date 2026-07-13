import React from 'react';

import {
  View,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import {
  AppButton,
  AppCard,
  AppText,
} from '@/components/ui';

import { styles } from './PaymentProgress.styles';

import type {
  PaymentProgressProps,
} from './PaymentProgress.types';

export function PaymentProgress({
  title,
  amount,
  target,
  membersPaid,
  totalMembers,
  onRecordPayment,
}: PaymentProgressProps) {
  const progress = Math.min(amount / target, 1);

  const percentage = Math.round(progress * 100);

  return (
    <AppCard
      padding="none"
      style={styles.card}
    >
      <LinearGradient
        colors={[
          '#534AB7',
          '#7F77DD',
        ]}
        start={{
          x: 0,
          y: 0,
        }}
        end={{
          x: 1,
          y: 1,
        }}
        style={styles.gradient}
      >
        <AppText
          variant="small"
          style={styles.title}
        >
          {title}
        </AppText>

        <AppText
          variant="h1"
          weight="bold"
          style={styles.amount}
        >
          KSh {amount.toLocaleString()}
        </AppText>

        <View style={styles.progressBackground}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${percentage}%`,
              },
            ]}
          />
        </View>

        <View style={styles.progressInfo}>
          <AppText
            variant="caption"
            style={styles.progressText}
          >
            {membersPaid} of {totalMembers} members paid
          </AppText>

          <AppText
            variant="caption"
            weight="bold"
            style={styles.progressText}
          >
            {percentage}%
          </AppText>
        </View>

        <View style={styles.footer}>
          <AppButton
            title="Record Payment"
            variant="secondary"
            size="sm"
            fullWidth={false}
            onPress={onRecordPayment ?? (() => {})}
            leftIcon="record"
            style={styles.button}
          />
        </View>
      </LinearGradient>
    </AppCard>
  );
}