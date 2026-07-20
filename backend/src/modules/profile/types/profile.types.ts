export interface UpdateProfileDto {

    fullName?: string;
  
    phone?: string;
  
    avatarUrl?: string | null;
  
  }
  
  export interface ProfileDto {
  
    id: string;
  
    email: string;
  
    fullName: string;
  
    phone: string | null;
  
    avatarUrl: string | null;
  
    defaultRole: string;
  
  }