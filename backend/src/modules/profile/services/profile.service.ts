import { AppError } from "@/shared/errors/AppError";

import { toProfileDto } from "../mappers/profile.mapper";

import { ProfileRepository } from "../repositories/profile.repository";

import { UpdateProfileDto } from "../types/profile.types";

export class ProfileService {

  constructor(

    private readonly repository =
      new ProfileRepository(),

  ) {}

  async getProfile(

    profileId: string,

  ) {

    const profile =

      await this.repository.findById(

        profileId,

      );

    if (!profile) {

      throw new AppError(

        "Profile not found.",

        404,

      );

    }

    return toProfileDto(profile);

  }

  async updateProfile(

    profileId: string,

    dto: UpdateProfileDto,

  ) {

    const updated =

      await this.repository.updateProfile(

        profileId,

        dto,

      );

    return toProfileDto(updated);

  }

}