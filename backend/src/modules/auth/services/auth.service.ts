import { AppError } from "@/shared/errors/AppError";

import {
  generateAccessToken,
  generateActivationCode,
  hashCode,
  hashPassword,
  verifyCode,
  verifyPassword,
} from "@/shared/security";

import { AuthRepository } from "../repositories/auth.repository";

import {
  ActivateAccountDto,
  LoginDto,
} from "../types/auth.types";

export class AuthService {

  constructor(

    private readonly repository =
      new AuthRepository(),

  ) {}

  /**
   * ============================================================================
   * Generate Activation Code
   * ============================================================================
   */
  async generateMemberActivationCode(

    profileId: string,

  ) {

    const activationCode =
      generateActivationCode();

    const activationHash =
      await hashCode(
        activationCode,
      );

    const expiresAt =
      new Date(
        Date.now() +
        7 * 24 * 60 * 60 * 1000,
      ).toISOString();

    await this.repository.saveActivationCode(

      profileId,

      activationHash,

      expiresAt,

    );

    return {

      activationCode,

      expiresAt,

    };

  }

  /**
   * ============================================================================
   * Activate Account
   * ============================================================================
   */
  async activate(

    dto: ActivateAccountDto,

  ) {

    const profile =
      await this.repository.findByNationalId(
        dto.nationalId,
      );

    if (!profile) {

      throw new AppError(
        "Member not found.",
        404,
      );

    }

    if (
      profile.account_status ===
      "active"
    ) {

      throw new AppError(
        "Account already activated.",
        400,
      );

    }

    if (
      !profile.activation_code_hash
    ) {

      throw new AppError(
        "Activation code missing.",
        400,
      );

    }

    const valid =
      await verifyCode(

        dto.activationCode,

        profile.activation_code_hash,

      );

    if (!valid) {

      throw new AppError(
        "Invalid activation code.",
        401,
      );

    }

    const passwordHash =
      await hashPassword(
        dto.password,
      );

    await this.repository.updateActivation(

      profile.id,

      {

        password_hash:
          passwordHash,

        activation_code_hash:
          null,

        activation_expires_at:
          null,

        account_status:
          "active",

      },

    );

    return {

      success: true,

      message:
        "Account activated successfully.",

    };

  }

  /**
   * ============================================================================
   * Login
   * ============================================================================
   */
  async login(

    dto: LoginDto,

  ) {

    const profile =
      await this.repository.findByNationalId(
        dto.nationalId,
      );

    if (!profile) {

      throw new AppError(
        "Invalid credentials.",
        401,
      );

    }

    if (
      profile.account_status !==
      "active"
    ) {

      throw new AppError(
        "Account not activated.",
        403,
      );

    }

    const valid =
      await verifyPassword(

        dto.password,

        profile.password_hash,

      );

    if (!valid) {

      await this.repository.incrementFailedAttempts(

        profile.id,

        profile.failed_attempts ?? 0,

      );

      throw new AppError(
        "Invalid credentials.",
        401,
      );

    }

    await this.repository.updateLogin(

      profile.id,

      0,

      new Date().toISOString(),

    );

    const accessToken =
      generateAccessToken({

        id:
          profile.id,

        nationalId:
          profile.national_id,

        role:
          "member",

      });

    return {

      accessToken,

      user: {

        id:
          profile.id,

        fullName:
          profile.full_name,

        nationalId:
          profile.national_id,

        accountStatus:
          profile.account_status,

      },

    };

  }

  /**
   * ============================================================================
   * Current User
   * ============================================================================
   */
  async me(

    profileId: string,

  ) {

    return this.repository.findById(
      profileId,
    );

  }

  /**
   * ============================================================================
   * Update Password
   * ============================================================================
   */
  async changePassword(

    profileId: string,

    password: string,

  ) {

    const passwordHash =
      await hashPassword(
        password,
      );

    await this.repository.updatePassword(

      profileId,

      passwordHash,

    );

    return {

      success: true,

      message:
        "Password updated successfully.",

    };

  }

}