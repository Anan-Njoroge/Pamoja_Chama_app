/**
 * ============================================================================
 * useVerifyOtp
 * ============================================================================
 *
 * Verifies the Email OTP with Supabase.
 */

import { useState } from 'react';

import { router, useLocalSearchParams } from 'expo-router';

import { authService } from '../../services';

import type { UseVerifyOtpReturn } from './useVerifyOtp.types';

export function useVerifyOtp(): UseVerifyOtpReturn {

  const {

    email,

  } = useLocalSearchParams<{

    email: string;

  }>();

  const [code, setCode] = useState('');

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  async function verifyOtp() {

    try {

      setLoading(true);

      setError(null);

      const {

        error,

      } = await authService.verifyOtp({

        email,

        token: code,

      });

      if (error) {

        throw error;

      }

      router.replace('/(main)');

    }

    catch (err: any) {

      setError(err.message);

    }

    finally {

      setLoading(false);

    }

  }

  return {

    code,

    setCode,

    loading,

    error,

    verifyOtp,

  };

}