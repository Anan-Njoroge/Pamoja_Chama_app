/**
 * ============================================================================
 * AuthenticationLayout
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Shared page layout for every authentication screen.
 *
 * This component provides:
 *
 * ✓ Safe area support
 * ✓ Keyboard avoidance
 * ✓ Scroll support
 * ✓ Logo
 * ✓ Title
 * ✓ Subtitle
 * ✓ Consistent spacing
 * ✓ Responsive layout
 *
 * Used by:
 *
 * • Login
 * • OTP Verification
 * • Forgot Password (Future)
 * • Reset Password (Future)
 *
 * ============================================================================
 */

import React from 'react';

import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  Image,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { AppText } from '@/components/ui';

import { AUTHENTICATION_LAYOUT } from './AuthenticationLayout.constants';
import { styles } from './AuthenticationLayout.styles';

import type { AuthenticationLayoutProps } from './AuthenticationLayout.types';

import { Assets } from '@/constants/Assets';

export function AuthenticationLayout({
  title,
  subtitle,
  children,
}: AuthenticationLayoutProps) {
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={styles.safeArea}
    >
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={
          Platform.OS === 'ios'
            ? 'padding'
            : undefined
        }
        keyboardVerticalOffset={
          AUTHENTICATION_LAYOUT.keyboardOffset
        }
      >
        <ScrollView
          keyboardShouldPersistTaps={
            AUTHENTICATION_LAYOUT.keyboardShouldPersistTaps
          }
          contentContainerStyle={
            styles.scrollContent
          }
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>

            <View style={styles.logoContainer}>
              <Image
                source={Assets.splashLogo}
                style={styles.logo}
              />
            </View>

            <View style={styles.header}>
              <AppText
                variant="h2"
                style={styles.title}
              >
                {title}
              </AppText>

              <AppText
                variant="body"
                style={styles.subtitle}
              >
                {subtitle}
              </AppText>
            </View>

            <View style={styles.content}>
              {children}
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

AuthenticationLayout.displayName =
  'AuthenticationLayout';