import { supabase } from "@/config/database";

export class AuthRepository {
  async findByNationalId(nationalId: string) {
    const { data, error } = await supabase

      .from("profiles")

      .select("*")

      .eq("national_id", nationalId)

      .maybeSingle();

    if (error) throw error;

    return data;
  }

  async saveActivationCode(
    profileId: string,

    codeHash: string,

    expiresAt: string,
  ) {
    const { error } = await supabase

      .from("profiles")

      .update({
        activation_code_hash: codeHash,

        activation_expires_at: expiresAt,

        account_status: "pending",
      })

      .eq("id", profileId);

    if (error) throw error;
  }

  async updateActivation(
    profileId: string,

    values: {
      password_hash: string;

      activation_code_hash: null;

      activation_expires_at: null;

      account_status: "active";
    },
  ) {
    const { data, error } = await supabase

      .from("profiles")

      .update(values)

      .eq("id", profileId)

      .select()

      .single();

    if (error) throw error;

    return data;
  }

  async updateLogin(
    profileId: string,

    failedAttempts: number,

    lastLogin: string,
  ) {
    const { error } = await supabase

      .from("profiles")

      .update({
        failed_attempts: failedAttempts,

        last_login_at: lastLogin,
      })

      .eq("id", profileId);

    if (error) throw error;
  }
}
