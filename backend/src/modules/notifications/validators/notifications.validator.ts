import { z } from "zod";

export const createNotificationSchema = z.object({

  userId:

    z.string().uuid(),

  groupId:

    z.string().uuid().optional(),

  type:

    z.string(),

  title:

    z.string().min(2),

  message:

    z.string().min(2),

});