import { ProfileRepository } from '../repositories/profile.repository';

import { toProfileDto } from '../mappers/profile.mapper';

import { UpdateProfileDto } from '../types/profile.types';

export class ProfileService {

  constructor(

    private readonly repository =
      new ProfileRepository(),

  ) {}

  async getProfile(id: string) {

    const profile =
      await this.repository.findById(id);

    return toProfileDto(profile);

  }

  async updateProfile(
    id: string,
    dto: UpdateProfileDto,
  ) {

    const profile =
      await this.repository.updateProfile(
        id,
        dto,
      );

    return toProfileDto(profile);

  }

}