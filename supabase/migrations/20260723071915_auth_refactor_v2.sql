-- ============================================================================
-- Authentication Refactor V2
-- Replace Supabase Auth login with National ID + Password
-- ============================================================================

-- ----------------------------------------------------------------------------
-- Create account status enum
-- ----------------------------------------------------------------------------

CREATE TYPE account_status AS ENUM (
    'pending_activation',
    'active',
    'locked',
    'disabled'
);

-- ----------------------------------------------------------------------------
-- Extend profiles table
-- ----------------------------------------------------------------------------

ALTER TABLE profiles

ADD COLUMN national_id TEXT,

ADD COLUMN password_hash TEXT,

ADD COLUMN account_status account_status
DEFAULT 'pending_activation',

ADD COLUMN activation_code_hash TEXT,

ADD COLUMN activation_expires_at TIMESTAMPTZ,

ADD COLUMN reset_code_hash TEXT,

ADD COLUMN reset_code_expires_at TIMESTAMPTZ,

ADD COLUMN failed_attempts INTEGER
DEFAULT 0,

ADD COLUMN last_login_at TIMESTAMPTZ;

-- ----------------------------------------------------------------------------
-- National ID must be unique
-- ----------------------------------------------------------------------------

ALTER TABLE profiles

ADD CONSTRAINT profiles_national_id_unique
UNIQUE (national_id);

-- ----------------------------------------------------------------------------
-- Performance indexes
-- ----------------------------------------------------------------------------

CREATE INDEX idx_profiles_national_id
ON profiles(national_id);

CREATE INDEX idx_profiles_status
ON profiles(account_status);