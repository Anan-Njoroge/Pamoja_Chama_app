/**
 * ============================================================================
 * Authentication Types
 * ============================================================================
 *
 * Shared types used throughout the Authentication module.
 */

export type UserRole =
  | 'member'
  | 'treasurer'
  | 'administrator';

export interface AuthUser {

  id: string;

  fullName: string;

  phoneNumber: string;

  role: UserRole;

  groupId: string;

}

export interface LoginRequest {

  phoneNumber: string;

}

export interface VerifyOtpRequest {

  phoneNumber: string;

  otp: string;

}

export interface AuthSession {

  token: string;

  user: AuthUser;

}