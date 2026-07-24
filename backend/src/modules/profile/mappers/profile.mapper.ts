import { ProfileDto } from '../types/profile.types';

export function toProfileDto(profile: any): ProfileDto {

  return {

    id: profile.id,

    email: profile.email,

    fullName: profile.full_name,

    phone: profile.phone,

    avatarUrl: profile.avatar_url,

    defaultRole: profile.default_role,

  };

}