import 'dotenv/config';

export const env = {
  PORT: Number(process.env.PORT ?? 5000),

  NODE_ENV: process.env.NODE_ENV ?? 'development',

  SUPABASE_URL: process.env.SUPABASE_URL!,

  SUPABASE_PUBLISHABLE_KEY:
    process.env.SUPABASE_PUBLISHABLE_KEY!,

  SUPABASE_SECRET_KEY:
    process.env.SUPABASE_SECRET_KEY!,

  JWT_SECRET:
    process.env.JWT_SECRET!,

  JWT_EXPIRES_IN:
    (process.env.JWT_EXPIRES_IN ?? '7d') as
      | '1h'
      | '6h'
      | '12h'
      | '1d'
      | '7d'
      | '30d',

  BCRYPT_ROUNDS:
    Number(process.env.BCRYPT_ROUNDS ?? '12'),
};

export default env;