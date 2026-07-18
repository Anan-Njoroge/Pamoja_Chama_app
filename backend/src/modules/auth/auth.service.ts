/**
 * ============================================================================
 * Authentication Service
 * ============================================================================
 *
 * Business logic for authenticated users.
 *
 * ============================================================================
 */

import { authRepository } from './auth.repository';

import { Profile } from './auth.types';

class AuthService {

  async syncProfile(profile: Profile) {

    const existing =
      await authRepository.findProfileById(
        profile.id,
      );

    if (!existing) {
      return authRepository.createProfile(
        profile,
      );
    }

    return authRepository.updateProfile(
      profile.id,
      {
        full_name: profile.full_name,
        avatar_url: profile.avatar_url,
      },
    );
  }

  async getProfile(id: string) {

    return authRepository.findProfileById(
      id,
    );
  }

}

export const authService =
  new AuthService();