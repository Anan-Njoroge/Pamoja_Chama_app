import { z } from "zod";

/**
 * ============================================================================
 * Activate
 * ============================================================================
 */
export const activateSchema = z.object({

  nationalId:

    z.string()

      .min(6)

      .max(20),

  activationCode:

    z.string()

      .length(6),

  password:

    z.string()

      .min(6),

});

/**
 * ============================================================================
 * Login
 * ============================================================================
 */
export const loginSchema = z.object({

  nationalId:

    z.string()

      .min(6)

      .max(20),

  password:

    z.string()

      .min(6),

});

/**
 * ============================================================================
 * Change Password
 * ============================================================================
 */
export const changePasswordSchema = z.object({

  currentPassword:

    z.string()

      .min(6),

  newPassword:

    z.string()

      .min(6),

});