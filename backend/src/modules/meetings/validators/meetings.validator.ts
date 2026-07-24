import { z } from 'zod';

export const createMeetingSchema = z.object({

  groupId: z.uuid(),

  title: z.string().min(3).max(100),

  description: z.string().optional(),

  location: z.string().optional(),

  meetingDate: z.iso.datetime(),

});

export const attendanceSchema = z.object({

  memberId: z.uuid(),

  status: z.enum([

    'present',

    'absent',

    'late',

  ]),

});

export const updateMeetingSchema = z.object({

  title: z.string().min(3).max(100).optional(),

  description: z.string().optional(),

  location: z.string().optional(),

  meetingDate: z.iso.datetime().optional(),

  status: z.enum([

    'scheduled',

    'completed',

    'cancelled',

  ]).optional(),

  minutes: z.string().optional(),

});