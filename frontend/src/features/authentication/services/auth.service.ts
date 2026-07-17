/**
 * ============================================================================
 * Authentication Service
 * ============================================================================
 *
 * Handles authentication logic.
 *
 * NOTE:
 * -----
 * This implementation uses demo users.
 * Later it will communicate with the Node.js backend.
 * ============================================================================
 */

import { DEMO_OTP, DEMO_USERS } from '../constants/demoUsers';

import type {
  AuthSession,
  AuthUser,
} from '../types/auth.types';

import { authStorage } from '../storage/auth.storage'

class AuthService {

  private session: AuthSession | null = null;

  /**
   * Login
   */

  async login(phoneNumber: string): Promise<AuthUser> {

    await this.delay();

    const user = DEMO_USERS.find(
      (user) => user.phoneNumber === phoneNumber,
    );

    if (!user) {

      throw new Error('User not found.');

    }

    return user;

  }

  /**
   * Verify OTP
   */

  async verifyOtp(
    user: AuthUser,
    otp: string,
  ): Promise<AuthSession> {

    await this.delay();

    if (otp !== DEMO_OTP) {

      throw new Error('Invalid verification code.');

    }

    this.session = {

      token: 'demo-token',

      user,

    };

    await authStorage.saveSession(this.session);

    return this.session;

  }

  /**
   * Logout
   */

  async logout() {

    await authStorage.clearSession();
    this.session = null;

  }

  /**
   * Current Session
   */

  getSession() {

    return this.session;

  }

  /**
 * Restore Session
 */

async restoreSession() {

  const session =
    await authStorage.getSession();

  if (!session) {

    return null;

  }

  this.session = session;

  return session;

}

  /**
   * Current User
   */

  getCurrentUser() {

    return this.session?.user ?? null;

  }

  /**
   * Authentication Status
   */

  isAuthenticated() {

    return this.session !== null;

  }

  /**
   * Simulate API Request
   */

  private async delay() {

    return new Promise((resolve) =>
      setTimeout(resolve, 800),
    );

  }

}

export const authService = new AuthService();