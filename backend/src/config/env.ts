import 'dotenv/config';

export const env = {
  PORT: Number(process.env.PORT ?? 5000),

  NODE_ENV: process.env.NODE_ENV ?? 'development',

  SUPABASE_URL: process.env.SUPABASE_URL!,

  SUPABASE_PUBLISHABLE_KEY:
    process.env.SUPABASE_PUBLISHABLE_KEY!,

  SUPABASE_SECRET_KEY:
    process.env.SUPABASE_SECRET_KEY!,
};