/**
 * ============================================================================
 * Login Screen
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Entry point into the application.
 *
 * Users authenticate using their email address.
 *
 * This screen delegates business logic to useLogin(),
 * but temporarily includes a test button to verify that
 * Supabase Email OTP is working.
 *
 * ============================================================================
 */

import React from 'react';
import { Alert, View } from 'react-native';

import {
  AppButton,
  AppInput,
} from '@/components/ui';

import { authService } from '../../services/auth.service';

import { AuthenticationLayout } from '../../components/AuthenticationLayout';

import { LOGIN_SCREEN } from './LoginScreen.constants';

import { styles } from './LoginScreen.styles';

import { useLogin } from '../../hooks/useLogin';

export function LoginScreen() {

  const {

    email,

    setEmail,

    loading,

  } = useLogin();

  const testOtp = async () => {

    try {

      const { data, error } =
        await authService.signInWithEmail({

          email,

        });

      console.log(
        'Supabase Response:',
        data,
      );

      console.log(
        'Supabase Error:',
        error,
      );

      if (error) {

        Alert.alert(
          'Authentication Error',
          error.message,
        );

        return;

      }

      Alert.alert(
        'Success',
        'Check your email for the verification code.',
      );

    } catch (error) {

      console.error(error);

      Alert.alert(
        'Unexpected Error',
        'Something went wrong.',
      );

    }

  };

  return (

    <AuthenticationLayout

      title={LOGIN_SCREEN.title}

      subtitle={LOGIN_SCREEN.subtitle}

    >

      <View style={styles.container}>

        <AppInput

          value={email}

          onChangeText={setEmail}

          placeholder="Enter your email"

          keyboardType="email-address"

          autoCapitalize="none"

          autoCorrect={false}

          leftIcon="email"

          containerStyle={styles.input}

        />

        <AppButton

          title="Send Verification Code"

          loading={loading}

          onPress={testOtp}

          style={styles.button}

        />

      </View>

    </AuthenticationLayout>

  );

}

LoginScreen.displayName = 'LoginScreen';