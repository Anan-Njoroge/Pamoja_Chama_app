import { supabase } from '@/config/database';

import { CreateProfileDto } from '../types/auth.types';

export class AuthRepository {
  async findProfile(id: string) {
    return supabase
      .from('profiles')
      .select('*')
      .eq('id', id)
      .single();
  }

  async createProfile(profile: CreateProfileDto) {
    return supabase
      .from('profiles')
      .insert({
        id: profile.id,

        email: profile.email,

        full_name: profile.fullName,

        avatar_url: profile.avatarUrl,

        default_role: 'member',
      })
      .select()
      .single();
  }
}