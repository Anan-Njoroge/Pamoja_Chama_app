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