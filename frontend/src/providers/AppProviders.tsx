/**
 * ============================================================================
 * App Providers
 * ============================================================================
 *
 * Registers every application-wide provider.
 */

import React from 'react';

import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import {
  AuthProvider,
} from '@/features/authentication/context';

interface AppProvidersProps {

  children: React.ReactNode;

}

export function AppProviders({

  children,

}: AppProvidersProps) {

  return (

    <SafeAreaProvider>

      <AuthProvider>

        {children}

      </AuthProvider>

    </SafeAreaProvider>

  );

}

AppProviders.displayName =
  'AppProviders';