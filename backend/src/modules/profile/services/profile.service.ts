import { AppError } from '@/shared/errors/AppError';

import { ProfileRepository } from '../repositories/profile.repository';

import { toProfileDto } from '../mappers/profile.mapper';

import { UpdateProfileDto } from '../types/profile.types';

export class ProfileService {

  constructor(

    private readonly repository =

      new ProfileRepository(),

  ) {}

  async getProfile(id: string) {

    const result =

      await this.repository.findById(id);

    if (!result.data) {

      throw new AppError(

        'Profile not found.',

        404,

      );

    }

    return toProfileDto(result.data);

  }

  async updateProfile(

    id: string,

    dto: UpdateProfileDto,

  ) {

    const result =

      await this.repository.updateProfile(

        id,

        dto,

      );

    if (!result.data) {

      throw new AppError(

        'Unable to update profile.',

        400,

      );

    }

    return toProfileDto(result.data);

  }

}