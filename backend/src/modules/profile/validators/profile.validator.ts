import { z } from "zod";

export const updateProfileSchema = z.object({

  firstName:

    z.string().min(2).optional(),

  middleName:

    z.string().optional(),

  lastName:

    z.string().min(2).optional(),

  phoneNumber:

    z.string().optional(),

  email:

    z.string().email().optional(),

  nationalId:

    z.string().optional(),

});