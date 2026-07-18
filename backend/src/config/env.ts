import dotenv from 'dotenv';

import { z } from 'zod';

dotenv.config();

const schema = z.object({

  PORT: z.string(),

  NODE_ENV: z.enum([
    'development',
    'production',
    'test',
  ]),

  SUPABASE_URL: z.string().url(),

  SUPABASE_SECRET_KEY: z.string(),

  SUPABASE_ANON_KEY: z.string(),

});

export const env = schema.parse(process.env);