/**
 * ============================================================================
 * Authentication Repository
 * ============================================================================
 *
 * Handles all database operations for profiles.
 *
 * ============================================================================
 */

import { supabase } from '@/config/supabase';

import { Profile } from './auth.types';

class AuthRepository {

  async findProfileById(id: string) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      return null;
    }

    return data as Profile;
  }

  async createProfile(profile: Profile) {

    const { data, error } = await supabase
      .from('profiles')
      .insert(profile)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return data as Profile;
  }

  async updateProfile(
    id: string,
    profile: Partial<Profile>,
  ) {

    const { data, error } = await supabase
      .from('profiles')
      .update(profile)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return data as Profile;
  }

}

export const authRepository =
  new AuthRepository();