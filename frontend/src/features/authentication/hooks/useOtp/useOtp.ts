/**
 * ============================================================================
 * useOtp Hook
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Handles all OTP-related business logic.
 *
 * Responsibilities:
 *
 * ✓ Stores the OTP value
 * ✓ Starts the resend countdown
 * ✓ Verifies the OTP
 * ✓ Resends the OTP
 * ✓ Navigates after successful verification
 *
 * ============================================================================
 */

import {
  useCallback,
  useEffect,
  useState,
} from 'react';

import { router } from 'expo-router';

import { useAuth } from '../../context/useAuth';

import type {
  UseOtpResult,
} from './useOtp.types';

const RESEND_SECONDS = 30;

export function useOtp(): UseOtpResult {

  const {

    user,

    verifyOtp,

    loading,

  } = useAuth();

  const [otp, setOtp] =
    useState('');

  const [

    secondsRemaining,

    setSecondsRemaining,

  ] = useState(RESEND_SECONDS);

  /**
   * Countdown timer.
   */
  useEffect(() => {

    if (secondsRemaining <= 0) {

      return;

    }

    const timer = setTimeout(() => {

      setSecondsRemaining(previous => previous - 1);

    }, 1000);

    return () => clearTimeout(timer);

  }, [secondsRemaining]);

  /**
   * Verify OTP.
   */
  const verify =
    useCallback(async () => {

      if (!user) {

        return;

      }

      await verifyOtp(

        user,

        otp,

      );

      router.replace('/(main)');

    }, [

      otp,

      user,

      verifyOtp,

    ]);

  /**
   * Restart countdown.
   *
   * Later this will call the backend
   * to request another OTP.
   */
  const resend =
    useCallback(async () => {

      setSecondsRemaining(
        RESEND_SECONDS,
      );

    }, []);

  return {

    otp,

    setOtp,

    loading,

    secondsRemaining,

    canResend:
      secondsRemaining === 0,

    verify,

    resend,

  };

}