import { z } from 'zod';

export const createContributionSchema = z.object({

  groupId: z.string().uuid(),

  memberId: z.string().uuid(),

  amount: z.number().positive(),

  contributionDate: z.string(),

  paymentMethod: z.string(),

  notes: z.string().optional(),

});