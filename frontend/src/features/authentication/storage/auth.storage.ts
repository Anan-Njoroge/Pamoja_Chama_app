/**
 * ============================================================================
 * Authentication Storage
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Centralized helper for reading authentication information from Supabase.
 *
 * NOTE
 * ----
 * We DO NOT manually store JWTs.
 *
 * Supabase already persists:
 *
 * • access token
 * • refresh token
 * • session
 *
 * using secureStorage.
 *
 * This helper simply exposes convenient methods used throughout
 * the application.
 *
 * ============================================================================
 */

import { supabase } from '@/services/supabase/client';

class AuthStorage {

  /**
   * --------------------------------------------------------------------------
   * Current Session
   * --------------------------------------------------------------------------
   */

  async getSession() {

    const {

      data,

    } = await supabase.auth.getSession();

    return data.session;

  }

  /**
   * --------------------------------------------------------------------------
   * Current User
   * --------------------------------------------------------------------------
   */

  async getUser() {

    const {

      data,

    } = await supabase.auth.getUser();

    return data.user;

  }

  /**
   * --------------------------------------------------------------------------
   * Sign Out
   * --------------------------------------------------------------------------
   */

  async clearSession() {

    await supabase.auth.signOut();

  }

}

export const authStorage = new AuthStorage();