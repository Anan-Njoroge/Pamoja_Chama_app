import { z } from "zod";

/**
 * ============================================================================
 * Record Contribution
 * ============================================================================
 */

export const createContributionSchema = z.object({

  groupId: z
    .string()
    .uuid("Invalid group id."),

  memberId: z
    .string()
    .uuid("Invalid member id."),

  contributionTypeId: z
    .string()
    .uuid("Invalid contribution type."),

  paymentMethodId: z
    .string()
    .uuid("Invalid payment method."),

    amount: z
    .coerce
    .number()
    .positive("Amount must be greater than zero"),

  paymentDate: z
    .string()
    .datetime()
    .optional(),

  receiptNumber: z
    .string()
    .max(100)
    .optional(),

  notes: z
    .string()
    .max(500)
    .optional(),

});

/**
 * ============================================================================
 * Update Contribution
 * ============================================================================
 */

export const updateContributionSchema = z.object({

  contributionTypeId: z
    .string()
    .uuid()
    .optional(),

  paymentMethodId: z
    .string()
    .uuid()
    .optional(),

  amount: z
    .number()
    .positive()
    .optional(),

  paymentDate: z
    .string()
    .datetime()
    .optional(),

  receiptNumber: z
    .string()
    .max(100)
    .optional(),

  notes: z
    .string()
    .max(500)
    .optional(),

});

/**
 * ============================================================================
 * Route Params
 * ============================================================================
 */

export const contributionIdSchema = z.object({

  id: z
    .string()
    .uuid(),

});