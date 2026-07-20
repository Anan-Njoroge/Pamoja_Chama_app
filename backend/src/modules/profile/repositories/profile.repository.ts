import { BaseRepository } from '@/shared/database/BaseRepository';

import { UpdateProfileDto } from '../types/profile.types';

export class ProfileRepository extends BaseRepository {

  async findById(id: string) {

    const { data, error } =
      await this.db
        .from('profiles')
        .select('*')
        .eq('id', id)
        .single();

    this.handleError(
      error,
      'Unable to retrieve profile.',
    );

    return this.ensureFound(
      data,
      'Profile not found.',
    );

  }

  async updateProfile(
    id: string,
    dto: UpdateProfileDto,
  ) {

    const { data, error } =
      await this.db
        .from('profiles')
        .update({

          full_name: dto.fullName,

          phone: dto.phone,

          avatar_url: dto.avatarUrl,

        })
        .eq('id', id)
        .select()
        .single();

    this.handleError(
      error,
      'Unable to update profile.',
    );

    return this.ensureFound(
      data,
      'Profile not found.',
    );

  }

}