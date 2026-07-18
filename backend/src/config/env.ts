/**
 * ============================================================================
 * Environment Configuration
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Centralizes access to environment variables.
 *
 * WHY?
 * ----
 * Instead of calling process.env throughout the application,
 * every module imports values from here.
 *
 * This makes configuration:
 *
 * ✓ Centralized
 * ✓ Easier to maintain
 * ✓ Easier to validate
 * ✓ Easier to test
 *
 * ============================================================================
 */

import dotenv from 'dotenv';

dotenv.config();

export const env = {
  /**
   * Application
   */
  nodeEnv:
    process.env.NODE_ENV ?? 'development',

  port:
    Number(process.env.PORT) || 3000,

  /**
   * Supabase
   */
  supabaseUrl:
    process.env.SUPABASE_URL ?? '',

  supabaseAnonKey:
    process.env.SUPABASE_ANON_KEY ?? '',

  /**
   * JWT
   */
  jwtSecret:
    process.env.JWT_SECRET ?? '',
} as const;