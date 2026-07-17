import React, {
  useEffect,
  useMemo,
  useState,
} from 'react';

import { AuthContext } from './AuthContext';

import { authService } from '../services/auth.service';

import type {
  AuthSession,
  AuthUser,
} from '../types/auth.types';

import type {
  AuthContextValue,
} from './AuthContext.types';

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({
  children,
}: AuthProviderProps) {
  const [user, setUser] =
    useState<AuthUser | null>(null);

  const [session, setSession] =
    useState<AuthSession | null>(null);

  const [loading, setLoading] =
    useState(true);

  /**
   * Stores the phone number while the user is
   * moving between Login and OTP verification.
   */
  const [
    pendingPhoneNumber,
    setPendingPhoneNumber,
  ] = useState<string | null>(null);

  async function login(
    phoneNumber: string,
  ) {
    setLoading(true);

    try {
      return await authService.login(
        phoneNumber,
      );
    } finally {
      setLoading(false);
    }
  }

  async function verifyOtp(
    currentUser: AuthUser,
    otp: string,
  ) {
    setLoading(true);

    try {
      const currentSession =
        await authService.verifyOtp(
          currentUser,
          otp,
        );

      setSession(currentSession);

      setUser(currentSession.user);

      /**
       * OTP succeeded.
       * No longer need the temporary phone number.
       */
      setPendingPhoneNumber(null);
    } finally {
      setLoading(false);
    }
  }

  /**
 * Restore a previously authenticated session
 * when the application launches.
 */
  useEffect(() => {
    async function restore() {

      try {
        const restoredSession =
          await authService.restoreSession();

        if (restoredSession) {
          setSession(restoredSession);
          setUser(restoredSession.user);
        }

      } finally {
        setLoading(false);
      }
    }

    restore();
  }, []);

  async function logout() {
    await authService.logout();

    setSession(null);

    setUser(null);

    setPendingPhoneNumber(null);
  }

  const value =
    useMemo<AuthContextValue>(
      () => ({
        user,

        session,

        loading,

        isAuthenticated:
          session !== null,

        pendingPhoneNumber,

        setPendingPhoneNumber,

        login,

        verifyOtp,

        logout,
      }),
      [
        user,

        session,

        loading,

        pendingPhoneNumber,
      ],
    );

  return (
    <AuthContext.Provider
      value={value}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.displayName =
  'AuthProvider';