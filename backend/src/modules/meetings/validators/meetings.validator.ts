import { z } from "zod";

export const createMeetingSchema = z.object({

  groupId: z.string().uuid(),

  title: z.string().min(3),

  description: z.string().optional(),

  location: z.string().min(2),

  meetingDate: z.string(),

});

export const updateMeetingSchema = createMeetingSchema.partial();

export const attendanceSchema = z.object({

  meetingId: z.string().uuid(),

  memberId: z.string().uuid(),

  status: z.string(),

});

export const minutesSchema = z.object({

  minutes: z.string().min(5),

});