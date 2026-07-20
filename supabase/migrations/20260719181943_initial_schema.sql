/*
===============================================================================
Pamoja Chama
Initial Database Schema
===============================================================================
*/

-- ============================================================================
-- Extensions
-- ============================================================================

create extension if not exists "pgcrypto";

-- ============================================================================
-- Enums
-- ============================================================================

create type public.user_role as enum (
    'member',
    'treasurer',
    'admin'
);

create type public.member_status as enum (
    'active',
    'invited',
    'left',
    'removed'
);

-- ============================================================================
-- Updated At Trigger
-- ============================================================================

create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as
$$
begin
    new.updated_at = now();
    return new;
end;
$$;

-- ============================================================================
-- Profiles
-- ============================================================================

create table public.profiles (

    id uuid primary key
        references auth.users(id)
        on delete cascade,

    full_name text not null,

    email text unique not null,

    avatar_url text,

    phone text,

    default_role public.user_role
        not null
        default 'member',

    is_active boolean
        not null
        default true,

    created_at timestamptz
        not null
        default now(),

    updated_at timestamptz
        not null
        default now()
);

-- ============================================================================
-- Groups
-- ============================================================================

create table public.groups (

    id uuid primary key
        default gen_random_uuid(),

    name text
        not null,

    description text,

    currency text
        not null
        default 'KES',

    meeting_day text,

    meeting_time time,

    created_by uuid
        references public.profiles(id),

    created_at timestamptz
        default now(),

    updated_at timestamptz
        default now()
);

-- ============================================================================
-- Group Members
-- ============================================================================

create table public.group_members (

    id uuid primary key
        default gen_random_uuid(),

    group_id uuid
        not null
        references public.groups(id)
        on delete cascade,

    user_id uuid
        not null
        references public.profiles(id)
        on delete cascade,

    role public.user_role
        not null
        default 'member',

    status public.member_status
        not null
        default 'active',

    joined_at timestamptz
        default now(),

    created_at timestamptz
        default now(),

    updated_at timestamptz
        default now(),

    unique(group_id,user_id)
);

-- ============================================================================
-- Indexes
-- ============================================================================

create index idx_profiles_email
on public.profiles(email);

create index idx_groups_created_by
on public.groups(created_by);

create index idx_group_members_group
on public.group_members(group_id);

create index idx_group_members_user
on public.group_members(user_id);

-- ============================================================================
-- Updated At Triggers
-- ============================================================================

create trigger profiles_updated_at
before update on public.profiles
for each row
execute function public.handle_updated_at();

create trigger groups_updated_at
before update on public.groups
for each row
execute function public.handle_updated_at();

create trigger group_members_updated_at
before update on public.group_members
for each row
execute function public.handle_updated_at();

-- ============================================================================
-- Row Level Security
-- ============================================================================

alter table public.profiles enable row level security;

alter table public.groups enable row level security;

alter table public.group_members enable row level security;