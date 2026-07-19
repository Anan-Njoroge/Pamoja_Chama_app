/**
 * ============================================================================
 * Authentication Service
 * ============================================================================
 *
 * PURPOSE
 * -------
 * The only layer responsible for communicating with Supabase Authentication.
 *
 * Responsibilities:
 *
 * • Send Email OTP
 * • Verify Email OTP
 * • Get Current Session
 * • Get Current User
 * • Sign Out
 * • Listen for Authentication Changes
 *
 * ============================================================================
 */

import { supabase } from '@/services/supabase/client';

import type {

  LoginRequest,

  VerifyOtpRequest,

} from '../types/auth.types';

class AuthService {

  /**
   * --------------------------------------------------------------------------
   * Send Email Verification Code
   * --------------------------------------------------------------------------
   */

  async signInWithEmail({

    email,

  }: LoginRequest) {

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

  }: VerifyOtpRequest) {

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

  /**
   * --------------------------------------------------------------------------
   * Listen For Auth Changes
   * --------------------------------------------------------------------------
   */

  onAuthStateChange(callback: Parameters<typeof supabase.auth.onAuthStateChange>[0]) {

    return supabase.auth.onAuthStateChange(callback);

  }

}

export const authService = new AuthService();