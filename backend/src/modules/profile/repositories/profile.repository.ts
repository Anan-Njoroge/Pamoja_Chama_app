import { supabase } from '@/config/database';

import { UpdateProfileDto } from '../types/profile.types';

export class ProfileRepository {

  async findById(id: string) {

    return supabase

      .from('profiles')

      .select('*')

      .eq('id', id)

      .single();

  }

  async updateProfile(

    id: string,

    dto: UpdateProfileDto,

  ) {

    return supabase

      .from('profiles')

      .update({

        full_name: dto.fullName,

        phone: dto.phone,

        avatar_url: dto.avatarUrl,

      })

      .eq('id', id)

      .select()

      .single();

  }

}