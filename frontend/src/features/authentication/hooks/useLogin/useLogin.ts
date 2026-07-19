/**
 * ============================================================================
 * useLogin
 * ============================================================================
 *
 * Sends the Email OTP using Supabase.
 */

import { useState } from 'react';

import { router } from 'expo-router';

import { authService } from '../../services';

import type { UseLoginReturn } from './useLogin.types';

export function useLogin(): UseLoginReturn {

  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  async function continueLogin() {

    if (!email.trim()) {

      setError('Please enter your email.');

      return;

    }

    try {

      setLoading(true);

      setError(null);

      const {

        error,

      } = await authService.signInWithEmail({

        email,

      });

      if (error) {

        throw error;

      }

      router.push({

        pathname: '/(auth)/otp',

        params: {

          email,

        },

      });

    }

    catch (err: any) {

      setError(err.message);

    }

    finally {

      setLoading(false);

    }

  }

  return {

    email,

    setEmail,

    loading,

    error,

    continueLogin,

  };

}