/**
 * ============================================================================
 * OTP Screen
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Allows the user to verify the one-time password before entering
 * the application.
 *
 * This screen contains presentation only.
 * All business logic lives inside useOtp().
 *
 * ============================================================================
 */

import React from 'react';

import {
  View,
} from 'react-native';

import {
  AppButton,
  AppInput,
  AppText,
} from '@/components/ui';

import {
  AuthenticationLayout,
} from '../../components/AuthenticationLayout';

import {
  OTP_SCREEN,
} from './OtpScreen.constants';

import {
  styles,
} from './OtpScreen.styles';

import {
  useOtp,
} from '../../hooks/useOtp';

export function OtpScreen() {

  const {

    otp,

    setOtp,

    verify,

    resend,

    canResend,

    secondsRemaining,

    loading,

  } = useOtp();

  return (

    <AuthenticationLayout
      title={OTP_SCREEN.title}
      subtitle={OTP_SCREEN.subtitle}
    >

      <View style={styles.container}>

        <AppInput
          value={otp}
          onChangeText={setOtp}
          placeholder={OTP_SCREEN.placeholder}
          keyboardType="number-pad"
          containerStyle={styles.otpInput}
          maxLength={6}
        />

        <AppButton
          title={OTP_SCREEN.verifyButton}
          loading={loading}
          fullWidth
          onPress={verify}
        />

        <AppText
          variant="small"
          align="center"
          style={styles.helperText}
        >

          {canResend
            ? 'You can request another verification code.'
            : `Resend available in ${secondsRemaining}s`}

        </AppText>

        <AppButton
          title={OTP_SCREEN.resendButton}
          variant="ghost"
          fullWidth
          onPress={resend}
          disabled={!canResend}
        />

      </View>

    </AuthenticationLayout>

  );

}

OtpScreen.displayName =
  'OtpScreen';