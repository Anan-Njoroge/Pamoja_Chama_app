/**
 * ============================================================================
 * Application Providers
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Registers every global provider required by the application.
 *
 * Current Providers
 * -----------------
 * • Authentication
 *
 * Future Providers
 * ----------------
 * • React Query
 * • Theme
 * • Toast
 * • Modal
 * ============================================================================
 */

import type {
  PropsWithChildren,
} from 'react';

import {
  AuthProvider,
} from '@/features/authentication';

export function AppProviders({
  children,
}: PropsWithChildren) {

  return (

    <AuthProvider>

      {children}

    </AuthProvider>

  );

}

AppProviders.displayName = 'AppProviders';