/**
 * ============================================================================
 * Update Profile DTO
 * ============================================================================
 */

export interface UpdateProfileDto {

  firstName?: string;

  middleName?: string;

  lastName?: string;

  phoneNumber?: string;

  email?: string;

  nationalId?: string;

}

/**
 * ============================================================================
 * Profile DTO
 * ============================================================================
 */

export interface ProfileDto {

  id: string;

  firstName: string;

  middleName: string | null;

  lastName: string;

  phoneNumber: string | null;

  email: string | null;

  nationalId: string;

  accountStatus: string;

  createdAt: string;

}