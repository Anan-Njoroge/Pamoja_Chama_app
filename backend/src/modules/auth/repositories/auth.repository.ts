import { BaseRepository } from "@/shared/database/BaseRepository";

export class AuthRepository extends BaseRepository {

  /**
   * ============================================================================
   * Find Profile By National ID
   * ============================================================================
   */
  async findByNationalId(
    nationalId: string,
  ) {

    const { data, error } =
      await this.db
        .from("profiles")
        .select("*")
        .eq("national_id", nationalId)
        .maybeSingle();

    this.handleError(error);

    return data;

  }

  /**
   * ============================================================================
   * Find Profile By ID
   * ============================================================================
   */
  async findById(
    id: string,
  ) {

    const { data, error } =
      await this.db
        .from("profiles")
        .select("*")
        .eq("id", id)
        .single();

    this.handleError(error);

    return data;

  }

  /**
   * ============================================================================
   * Save Activation Code
   * ============================================================================
   */
  async saveActivationCode(

    profileId: string,

    activationCodeHash: string,

    expiresAt: string,

  ) {

    const { error } =
      await this.db

        .from("profiles")

        .update({

          activation_code_hash:
            activationCodeHash,

          activation_expires_at:
            expiresAt,

        })

        .eq("id", profileId);

    this.handleError(error);

  }

  /**
   * ============================================================================
   * Complete Account Activation
   * ============================================================================
   */
  async updateActivation(

    profileId: string,

    updates: {

      password_hash: string;

      activation_code_hash: null;

      activation_expires_at: null;

      account_status: "active";

    },

  ) {

    const { data, error } =
      await this.db

        .from("profiles")

        .update(updates)

        .eq("id", profileId)

        .select()

        .single();

    this.handleError(error);

    return data;

  }

  /**
   * ============================================================================
   * Update Login Information
   * ============================================================================
   */
  async updateLogin(

    profileId: string,

    failedAttempts: number,

    lastLoginAt: string,

  ) {

    const { error } =
      await this.db

        .from("profiles")

        .update({

          failed_attempts:
            failedAttempts,

          last_login_at:
            lastLoginAt,

        })

        .eq("id", profileId);

    this.handleError(error);

  }

  /**
   * ============================================================================
   * Increment Failed Login Attempts
   * ============================================================================
   */
  async incrementFailedAttempts(

    profileId: string,

    currentAttempts: number,

  ) {

    const { error } =
      await this.db

        .from("profiles")

        .update({

          failed_attempts:
            currentAttempts + 1,

        })

        .eq("id", profileId);

    this.handleError(error);

  }

  /**
   * ============================================================================
   * Save Password Reset Code
   * ============================================================================
   */
  async saveResetCode(

    profileId: string,

    resetCodeHash: string,

    expiresAt: string,

  ) {

    const { error } =
      await this.db

        .from("profiles")

        .update({

          reset_code_hash:
            resetCodeHash,

          reset_code_expires_at:
            expiresAt,

        })

        .eq("id", profileId);

    this.handleError(error);

  }

  /**
   * ============================================================================
   * Update Password
   * ============================================================================
   */
  async updatePassword(

    profileId: string,

    passwordHash: string,

  ) {

    const { error } =
      await this.db

        .from("profiles")

        .update({

          password_hash:
            passwordHash,

          reset_code_hash:
            null,

          reset_code_expires_at:
            null,

        })

        .eq("id", profileId);

    this.handleError(error);

  }

}