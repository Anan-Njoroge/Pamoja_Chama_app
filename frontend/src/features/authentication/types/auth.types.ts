/**
 * ============================================================================
 * Authentication Types
 * ============================================================================
 */

import type {

  Session,

  User,

} from '@supabase/supabase-js';

export interface LoginRequest {

  email: string;

}

export interface VerifyOtpRequest {

  email: string;

  token: string;

}

export interface AuthContextType {

  user: User | null;

  session: Session | null;

  loading: boolean;

  signOut(): Promise<void>;

}