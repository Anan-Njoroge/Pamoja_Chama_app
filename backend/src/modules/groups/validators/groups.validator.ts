import { z } from 'zod';

/**
 * ============================================================================
 * Create Group
 * ============================================================================
 */
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
    .min(3, 'Meeting day is required.'),

  meetingTime: z
    .string()
    .min(3, 'Meeting time is required.'),

});

/**
 * ============================================================================
 * Invite Member
 * ============================================================================
 *
 * Treasurer creates the member's account.
 * The member later activates it using
 * National ID + Activation Code.
 */
export const inviteMemberSchema = z.object({

  fullName: z
    .string()
    .min(3)
    .max(100),

  nationalId: z
    .string()
    .min(6)
    .max(20)
    .regex(
      /^[0-9A-Za-z]+$/,
      'Invalid National ID.',
    ),

  phone: z
    .string()
    .min(10)
    .max(15)
    .regex(
      /^\+?[0-9]+$/,
      'Invalid phone number.',
    ),

});