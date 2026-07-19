/**
 * ============================================================================
 * Login Screen
 * ============================================================================
 *
 * Sends an Email OTP using Supabase Authentication.
 */

import React from 'react';

import { View } from 'react-native';

import {

  AppButton,

  AppInput,

} from '@/components/ui';

import { AuthenticationLayout } from '../../components/AuthenticationLayout';

import { LOGIN_SCREEN } from './LoginScreen.constants';

import { styles } from './LoginScreen.styles';

import { useLogin } from '../../hooks/useLogin';

export function LoginScreen() {

  const {

    email,

    setEmail,

    continueLogin,

    loading,

  } = useLogin();

  return (

    <AuthenticationLayout

      title={LOGIN_SCREEN.title}

      subtitle={LOGIN_SCREEN.subtitle}

    >

      <View style={styles.container}>

        <AppInput

          value={email}

          onChangeText={setEmail}

          placeholder={LOGIN_SCREEN.emailPlaceholder}

          keyboardType="email-address"

          autoCapitalize="none"

          autoCorrect={false}

          leftIcon="mail"

          containerStyle={styles.input}

        />

        <AppButton

          title={LOGIN_SCREEN.continueButton}

          loading={loading}

          onPress={continueLogin}

        />

      </View>

    </AuthenticationLayout>

  );

}

LoginScreen.displayName = 'LoginScreen';