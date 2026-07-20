import { z } from 'zod';

export const createGroupSchema = z.object({

  name: z
    .string()
    .min(3)
    .max(100),

  description: z
    .string()
    .max(500)
    .optional(),

  currency: z
    .string()
    .default('KES'),

  meetingDay: z
    .string()
    .optional(),

  meetingTime: z
    .string()
    .optional(),

});

export const inviteMemberSchema = z.object({

  email: z

    .string()

    .email(),

});