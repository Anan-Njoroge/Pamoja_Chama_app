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

export const LoginSchema =
    z.object({

        nationalId:

            z.string()

                .min(6)

                .max(20),

        password:

            z.string()

                .min(4),

    });

export const ActivateSchema =
    z.object({

        nationalId:

            z.string()

                .min(6)

                .max(20),

        activationCode:

            z.string()

                .length(6),

        password:

            z.string()

                .min(4)

                .max(100),

    });