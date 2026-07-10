import React from 'react';

import {

  View,

} from 'react-native';

import {

  AppCard,

  AppText,

} from '@/components/ui';

import {

  PaymentItem,

} from '../PaymentItem';

import {

  styles,

} from './RecentPayment.styles';

import type {

  RecentPaymentProps,

} from './RecentPayment.types';

export function RecentPayment({

  payments,

}: RecentPaymentProps) {

  return (

    <AppCard>

      <View style={styles.header}>

        <AppText variant="h3">

          Recent Payments

        </AppText>

        <AppText

          variant="small"

          color="primary"

        >

          View All

        </AppText>

      </View>

      {payments.map(payment => (

        <PaymentItem

          key={payment.id}

          memberName={payment.memberName}

          amount={payment.amount}

          description={payment.description}

          date={payment.date}

        />

      ))}

    </AppCard>

  );

}