/**
 * ============================================================================
 * Authentication Service
 * ============================================================================
 *
 * Every authentication request goes through this service.
 *
 * Screens should never communicate with Supabase directly.
 *
 * ============================================================================
 */

import { supabase } from '@/services/supabase/client';

import type {
  LoginPayload,
  VerifyOtpPayload,
} from '../types/auth.types';

class AuthService {

  /**
   * --------------------------------------------------------------------------
   * Send Email OTP
   * --------------------------------------------------------------------------
   */

  async signInWithEmail({
    email,
  }: LoginPayload) {

    return supabase.auth.signInWithOtp({

      email,

      options: {

        shouldCreateUser: true,

      },

    });

  }

  /**
   * --------------------------------------------------------------------------
   * Verify Email OTP
   * --------------------------------------------------------------------------
   */

  async verifyOtp({
    email,
    token,
  }: VerifyOtpPayload) {

    return supabase.auth.verifyOtp({

      email,

      token,

      type: 'email',

    });

  }

  /**
   * --------------------------------------------------------------------------
   * Current Session
   * --------------------------------------------------------------------------
   */

  async getSession() {

    return supabase.auth.getSession();

  }

  /**
   * --------------------------------------------------------------------------
   * Current User
   * --------------------------------------------------------------------------
   */

  async getUser() {

    return supabase.auth.getUser();

  }

  /**
   * --------------------------------------------------------------------------
   * Logout
   * --------------------------------------------------------------------------
   */

  async signOut() {

    return supabase.auth.signOut();

  }

}

export const authService = new AuthService();