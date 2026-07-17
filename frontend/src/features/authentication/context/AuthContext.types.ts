/**
 * ============================================================================
 * Authentication Context Types
 * ============================================================================
 */

import type {
  AuthSession,
  AuthUser,
} from '../types/auth.types';

export interface AuthContextValue {
  /**
   * Current authenticated user.
   */
  user: AuthUser | null;

  /**
   * Current authentication session.
   */
  session: AuthSession | null;

  /**
   * Indicates whether authentication is being processed.
   */
  loading: boolean;

  /**
   * Indicates whether the user is authenticated.
   */
  isAuthenticated: boolean;

  /**
   * Phone number waiting for OTP verification.
   */
  pendingPhoneNumber: string | null;

  /**
   * Stores the phone number during the
   * authentication flow.
   */
  setPendingPhoneNumber(
    phoneNumber: string | null,
  ): void;

  /**
   * Begins the authentication flow.
   */
  login(
    phoneNumber: string,
  ): Promise<AuthUser>;

  /**
   * Verifies the OTP code.
   */
  verifyOtp(
    user: AuthUser,
    otp: string,
  ): Promise<void>;

  /**
   * Signs the current user out.
   */
  logout(): Promise<void>;
}