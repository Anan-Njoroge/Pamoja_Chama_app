/*
===============================================================================
Financial Foundation
===============================================================================
*/

-- ============================================================================
-- Contribution Types
-- ============================================================================

create table public.contribution_types (

    id uuid primary key
        default gen_random_uuid(),

    group_id uuid
        not null
        references public.groups(id)
        on delete cascade,

    name text
        not null,

    description text,

    amount numeric(12,2),

    is_fixed boolean
        not null
        default true,

    is_required boolean
        not null
        default true,

    is_active boolean
        not null
        default true,

    created_at timestamptz
        default now(),

    updated_at timestamptz
        default now()
);

-- ============================================================================
-- Payment Methods
-- ============================================================================

create table public.payment_methods (

    id uuid primary key
        default gen_random_uuid(),

    group_id uuid
        not null
        references public.groups(id)
        on delete cascade,

    name text
        not null,

    description text,

    is_active boolean
        default true,

    created_at timestamptz
        default now()
);

-- ============================================================================
-- Updated At Trigger
-- ============================================================================

create trigger contribution_types_updated_at

before update

on public.contribution_types

for each row

execute function public.handle_updated_at();

-- ============================================================================

create index idx_contribution_types_group

on public.contribution_types(group_id);

create index idx_payment_methods_group

on public.payment_methods(group_id);

-- ============================================================================

alter table public.contribution_types

enable row level security;

alter table public.payment_methods

enable row level security;