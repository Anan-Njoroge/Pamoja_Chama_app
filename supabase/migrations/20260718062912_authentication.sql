-- ============================================================================
-- Authentication
-- ============================================================================

-- Supabase Auth manages:
-- • Users
-- • Sessions
-- • Refresh Tokens
-- • Email OTP
--
-- Therefore no additional authentication tables
-- are required for this project.

ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS role
TEXT NOT NULL DEFAULT 'member';