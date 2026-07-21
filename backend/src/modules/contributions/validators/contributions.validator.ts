import { z } from 'zod';

export const createContributionSchema = z.object({

  groupId: z.string().uuid(),

  contributionTypeId: z.string().uuid(),

  paymentMethodId: z.string().uuid().optional(),

  receiptNumber: z.string().trim().optional(),

  amount: z.number().positive(),

  paymentDate: z.string().datetime().optional(),

  notes: z.string().max(500).optional(),

});

export const rejectContributionSchema = z.object({

  rejectionReason: z

    .string()

    .trim()

    .min(5)

    .max(300),

});