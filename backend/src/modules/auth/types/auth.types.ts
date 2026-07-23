export interface CreateProfileDto {
    id: string;
    email: string;
    fullName: string;
    avatarUrl?: string | null;
  }
  
  export interface ProfileResponse {
    id: string;
    email: string;
    full_name: string;
    avatar_url: string | null;
    default_role: 'member' | 'treasurer' | 'admin';
  }

  export interface LoginDto {

    nationalId: string;

    password: string;

}

export interface ActivateAccountDto {

    nationalId: string;

    activationCode: string;

    password: string;

}

export interface AuthUser {

    id: string;

    fullName: string;

    nationalId: string;

    accountStatus: string;

}

export interface LoginResponse {

    accessToken: string;

    user: AuthUser;

}