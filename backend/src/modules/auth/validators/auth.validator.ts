import { z } from 'zod';

export const createProfileSchema = z.object({
  id: z.string().uuid(),

  email: z.string().email(),

  fullName: z.string().min(2),

  avatarUrl: z.string().nullable().optional(),
});

export type CreateProfileInput = z.infer<
  typeof createProfileSchema
>;