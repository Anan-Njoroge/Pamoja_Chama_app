-- ============================================================================
-- Profiles
-- ============================================================================

create table public.profiles (

    id uuid primary key
        references auth.users(id)
        on delete cascade,

    full_name text not null,

    phone_number text unique,

    avatar_url text,

    role text not null default 'member',

    is_active boolean not null default true,

    created_at timestamptz not null default now(),

    updated_at timestamptz not null default now()

);
-- ============================================================================
-- Groups
-- ============================================================================

create table public.groups (
    id uuid primary key default gen_random_uuid(),

    name text not null,

    description text,

    contribution_amount numeric(12,2) not null,

    meeting_day text,

    created_by text references public.profiles(id),

    created_at timestamptz not null default now(),

    updated_at timestamptz not null default now()
);

-- ============================================================================
-- Membership Roles
-- ============================================================================

create type membership_role as enum (
    'member',
    'treasurer',
    'administrator'
);

-- ============================================================================
-- Membership Status
-- ============================================================================

create type membership_status as enum (
    'active',
    'inactive',
    'removed'
);

-- ============================================================================
-- Memberships
-- ============================================================================

create table public.memberships (
    id uuid primary key default gen_random_uuid(),

    profile_id text not null
    references public.profiles(id)
    on delete cascade,

    group_id uuid not null
        references public.groups(id)
        on delete cascade,

    role membership_role
        not null default 'member',

    status membership_status
        not null default 'active',

    joined_at timestamptz
        not null default now(),

    unique(profile_id, group_id)
);