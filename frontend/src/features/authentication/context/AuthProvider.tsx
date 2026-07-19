/**
 * ============================================================================
 * Authentication Provider
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Central authentication state for the application.
 *
 * Responsibilities
 * ----------------
 * • Restore previous session
 * • Listen for authentication changes
 * • Expose authenticated user
 * • Expose current session
 * • Provide sign out functionality
 *
 * ============================================================================
 */

import React, {
  useEffect,
  useMemo,
  useState,
} from 'react';

import type {
  PropsWithChildren,
} from 'react';

import type {
  Session,
  User,
} from '@supabase/supabase-js';

import { AuthContext } from './AuthContext';

import { authService } from '../services';

export function AuthProvider({
  children,
}: PropsWithChildren) {

  const [user, setUser] =
    useState<User | null>(null);

  const [session, setSession] =
    useState<Session | null>(null);

  const [loading, setLoading] =
    useState(true);

  /**
   * --------------------------------------------------------------------------
   * Restore Existing Session
   * --------------------------------------------------------------------------
   */

  useEffect(() => {

    let mounted = true;

    async function initialise() {

      const { data } =
        await authService.getSession();

      if (!mounted) {
        return;
      }

      setSession(data.session);

      setUser(
        data.session?.user ?? null,
      );

      setLoading(false);

    }

    initialise();

    const {
      data: listener,
    } = authService.onAuthStateChange(
      async (_event, session): Promise<void> => {

        if (!mounted) {
          return;
        }

        setSession(session);

        setUser(
          session?.user ?? null,
        );

        setLoading(false);

      },
    );

    return () => {

      mounted = false;

      listener.subscription.unsubscribe();

    };

  }, []);

  /**
   * --------------------------------------------------------------------------
   * Sign Out
   * --------------------------------------------------------------------------
   */

  async function signOut(): Promise<void> {

    await authService.signOut();

  }

  /**
   * --------------------------------------------------------------------------
   * Context Value
   * --------------------------------------------------------------------------
   */

  const value = useMemo(
    () => ({

      user,

      session,

      loading,

      signOut,

    }),
    [
      user,
      session,
      loading,
    ],
  );

  return (

    <AuthContext.Provider value={value}>

      {children}

    </AuthContext.Provider>

  );

}

AuthProvider.displayName = 'AuthProvider';