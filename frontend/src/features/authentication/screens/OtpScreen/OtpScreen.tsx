import React from 'react';

import { View } from 'react-native';

import {

  AppButton,

  AppInput,

} from '@/components/ui';

import { AuthenticationLayout } from '../../components/AuthenticationLayout';

import { OTP_SCREEN } from './OtpScreen.constants';

import { styles } from './OtpScreen.styles';

import { useVerifyOtp } from '../../hooks/useVerifyOtp';

export function OtpScreen() {

  const {

    code,

    setCode,

    verifyOtp,

    loading,

  } = useVerifyOtp();

  return (

    <AuthenticationLayout

      title={OTP_SCREEN.title}

      subtitle={OTP_SCREEN.subtitle}

    >

      <View style={styles.container}>

        <AppInput

          value={code}

          onChangeText={setCode}

          placeholder={OTP_SCREEN.placeholder}

          keyboardType="number-pad"

          maxLength={6}

        />

        <AppButton

          title={OTP_SCREEN.button}

          loading={loading}

          onPress={verifyOtp}

        />

      </View>

    </AuthenticationLayout>

  );

}

OtpScreen.displayName = 'OtpScreen';