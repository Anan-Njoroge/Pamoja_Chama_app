/**
 * ============================================================================
 * Login
 * ============================================================================
 */
export interface LoginDto {

  nationalId: string;

  password: string;

}

/**
 * ============================================================================
 * Activate Account
 * ============================================================================
 */
export interface ActivateAccountDto {

  nationalId: string;

  activationCode: string;

  password: string;

}

/**
 * ============================================================================
 * Change Password
 * ============================================================================
 */
export interface ChangePasswordDto {

  currentPassword: string;

  newPassword: string;

}

/**
 * ============================================================================
 * Auth Response
 * ============================================================================
 */
export interface AuthResponseDto {

  accessToken: string;

  refreshToken: string;

  profile: {

    id: string;

    fullName: string;

    nationalId: string;

    phone: string;

    accountStatus: string;

  };

}