import { z } from 'zod';

export const updateProfileSchema = z.object({

  fullName: z
    .string()
    .min(2)
    .max(100)
    .optional(),

  phone: z
    .string()
    .regex(/^(\+254|0)[17]\d{8}$/)
    .optional(),

  avatarUrl: z
    .string()
    .url()
    .nullable()
    .optional(),

});