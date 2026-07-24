import { BaseRepository } from "@/shared/database/BaseRepository";

import { UpdateProfileDto } from "../types/profile.types";

export class ProfileRepository extends BaseRepository {

  async findById(

    profileId: string,

  ) {

    const { data, error } =

      await this.db

        .from("profiles")

        .select("*")

        .eq("id", profileId)

        .maybeSingle();

    this.handleError(error);

    return data;

  }

  async updateProfile(

    profileId: string,

    dto: UpdateProfileDto,

  ) {

    const { data, error } =

      await this.db

        .from("profiles")

        .update({

          first_name: dto.firstName,

          middle_name: dto.middleName,

          last_name: dto.lastName,

          phone_number: dto.phoneNumber,

          email: dto.email,

          national_id: dto.nationalId,

        })

        .eq("id", profileId)

        .select()

        .single();

    this.handleError(error);

    return data;

  }

}