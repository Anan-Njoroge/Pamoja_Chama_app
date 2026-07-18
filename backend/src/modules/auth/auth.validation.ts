import { z } from 'zod';

export const syncProfileSchema = z.object({

  full_name: z
    .string()
    .trim()
    .min(2)
    .max(100),

  avatar_url: z
    .string()
    .url()
    .nullable()
    .optional(),

});