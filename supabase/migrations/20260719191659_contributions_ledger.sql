/*
===============================================================================
Contributions Ledger
===============================================================================
*/

-- ============================================================================
-- Contribution Status
-- ============================================================================

do $$
begin

    if not exists (

        select 1

        from pg_type

        where typname = 'contribution_status'

    ) then

        create type public.contribution_status as enum (

            'pending',

            'completed',

            'cancelled'

        );

    end if;

end $$;

-- ============================================================================
-- Contributions
-- ============================================================================

create table public.contributions (

    id uuid primary key
        default gen_random_uuid(),

    group_id uuid
        not null
        references public.groups(id)
        on delete cascade,

    member_id uuid
        not null
        references public.profiles(id)
        on delete cascade,

    contribution_type_id uuid
        not null
        references public.contribution_types(id),

    payment_method_id uuid
        references public.payment_methods(id),

    recorded_by uuid
        not null
        references public.profiles(id),

    receipt_number text
        not null
        unique,

    amount numeric(12,2)
        not null
        check (amount > 0),

    payment_date timestamptz
        not null
        default now(),

    status public.contribution_status
        not null
        default 'completed',

    notes text,

    created_at timestamptz
        default now(),

    updated_at timestamptz
        default now(),

    deleted_at timestamptz
);

-- ============================================================================
-- Indexes
-- ============================================================================

create index idx_contributions_group

on public.contributions(group_id);

create index idx_contributions_member

on public.contributions(member_id);

create index idx_contributions_payment_date

on public.contributions(payment_date);

create index idx_contributions_recorded_by

on public.contributions(recorded_by);

create index idx_contributions_type

on public.contributions(contribution_type_id);

-- ============================================================================
-- Updated At Trigger
-- ============================================================================

create trigger contributions_updated_at

before update

on public.contributions

for each row

execute function public.handle_updated_at();

-- ============================================================================
-- Enable RLS
-- ============================================================================

alter table public.contributions

enable row level security;