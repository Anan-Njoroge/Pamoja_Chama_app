/**
 * ============================================================================
 * Login Screen
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Entry point into the application.
 *
 * Users may:
 *
 * • Sign in with their phone number
 * • Choose a demo account for presentations
 *
 * The screen itself contains very little business logic.
 * Authentication is delegated to useLogin().
 *
 * ============================================================================
 */

import React from "react";

import { View } from "react-native";

import { AppButton, AppInput, AppText, AppDivider } from "@/components/ui";

import { AuthenticationLayout } from "../../components/AuthenticationLayout";

import { DemoAccountCard } from "../../components/DemoAccountCard";

import { DEMO_USERS } from "../../constants/demoUsers";

import { LOGIN_SCREEN } from "./LoginScreen.constants";

import { styles } from "./LoginScreen.styles";

import { useLogin } from "../../hooks/useLogin";

import type { IconName } from '@/components/ui';

function getRoleIcon(
  role: string,
): IconName {

  switch (role) {

    case 'treasurer':
      return 'wallet';

    case 'administrator':
      return 'settings';

    default:
      return 'profile';

  }

}

export function LoginScreen() {
  const {
    phoneNumber,

    setPhoneNumber,

    continueLogin,

    selectDemoAccount,

    loading,
  } = useLogin();

  return (
    <AuthenticationLayout
      title={LOGIN_SCREEN.title}
      subtitle={LOGIN_SCREEN.subtitle}
    >
      <View style={styles.container}>
        <AppInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder={LOGIN_SCREEN.phonePlaceholder}
          keyboardType="phone-pad"
          leftIcon="phone"
          containerStyle={styles.input}
        />

        <AppButton
          title={LOGIN_SCREEN.continueButton}
          loading={loading}
          onPress={continueLogin}
          style={styles.button}
        />

        <View style={styles.dividerContainer}>
          <AppDivider label="OR" spacing="xl" />
        </View>

        <View style={styles.demoSection}>
          <AppText variant="h3" style={styles.demoTitle}>
            {LOGIN_SCREEN.demoSectionTitle}
          </AppText>

          <AppText variant="small" style={styles.demoSubtitle}>
            {LOGIN_SCREEN.demoSectionSubtitle}
          </AppText>

          {DEMO_USERS.map((user) => (
            <DemoAccountCard
              key={user.id}
              title={user.fullName}
              phoneNumber={user.phoneNumber}
              role={user.role}
              icon={getRoleIcon(user.role)}
              onPress={selectDemoAccount}
            />
          ))}
        </View>
      </View>
    </AuthenticationLayout>
  );
}

LoginScreen.displayName = "LoginScreen";
