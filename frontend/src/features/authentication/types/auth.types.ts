/**
 * ============================================================================
 * Authentication Types
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Defines every authentication model used throughout the application.
 *
 * These types are intentionally independent of React so they can be reused
 * across:
 *
 * • Services
 * • Hooks
 * • Context
 * • Screens
 * • Storage
 *
 * Authentication is handled entirely by Supabase Auth using Email OTP.
 *
 * ============================================================================
 */

export interface LoginRequest {

  email: string;

}

export interface VerifyOtpRequest {

  email: string;

  token: string;

}

export interface UserProfile {

  id: string;

  email: string;

  fullName: string | null;

  role: 'member' | 'treasurer' | 'administrator';

  avatarUrl: string | null;

}

export interface AuthSession {

  accessToken: string;

  refreshToken: string;

  expiresAt: number;

}

export interface AuthState {

  user: UserProfile | null;

  session: AuthSession | null;

  loading: boolean;

}

export interface LoginResponse {

  success: boolean;

  message: string;

}

export interface VerifyOtpResponse {

  success: boolean;

  message: string;

}