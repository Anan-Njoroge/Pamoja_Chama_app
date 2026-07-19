/**
 * ============================================================================
 * Supabase Client
 * ============================================================================
 */

import { createClient } from '@supabase/supabase-js';

import { secureStorage } from './storage';

const supabaseUrl =
  process.env.EXPO_PUBLIC_SUPABASE_URL!;

const supabasePublishableKey =
  process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey,
  {
    auth: {
      storage: secureStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  },
);