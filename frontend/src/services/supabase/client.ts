/**
 * ============================================================================
 * Supabase Client
 * ============================================================================
 */

import { createClient } from '@supabase/supabase-js';

import { secureStorage } from './storage';

const url =
  process.env.EXPO_PUBLIC_SUPABASE_URL!;

const key =
  process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

export const supabase = createClient(
  url,
  key,
  {
    auth: {
      storage: secureStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  },
);