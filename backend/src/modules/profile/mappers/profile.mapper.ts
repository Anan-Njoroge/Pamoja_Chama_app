import {

  ProfileDto,

} from "../types/profile.types";

/**
 * ============================================================================
 * Profile Mapper
 * ============================================================================
 */

export function toProfileDto(

  profile: any,

): ProfileDto {

  return {

    id:

      profile.id,

    firstName:

      profile.first_name,

    middleName:

      profile.middle_name,

    lastName:

      profile.last_name,

    phoneNumber:

      profile.phone_number,

    email:

      profile.email,

    nationalId:

      profile.national_id,

    accountStatus:

      profile.account_status,

    createdAt:

      profile.created_at,

  };

}