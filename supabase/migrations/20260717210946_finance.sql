-- Contributions
create table public.contributions (
    id uuid primary key default gen_random_uuid(),

    membership_id uuid
        not null
        references public.memberships(id)
        on delete cascade,

    meeting_id uuid
        references public.meetings(id)
        on delete set null,

    amount numeric(12,2)
        not null,

    payment_date timestamptz
        not null default now(),

    recorded_by text
    references public.profiles(id),

    created_at timestamptz
        not null default now()
);

-- Loan Status
create type loan_status as enum (
    'pending',
    'approved',
    'rejected',
    'active',
    'completed'
);

-- Loans
create table public.loans (
    id uuid primary key default gen_random_uuid(),

    membership_id uuid
        not null
        references public.memberships(id)
        on delete cascade,

    amount numeric(12,2)
        not null,

    outstanding_balance numeric(12,2)
        not null,

    interest_rate numeric(5,2)
        not null default 0,

    due_date date,

    status loan_status
        not null default 'pending',

   approved_by text
    references public.profiles(id),

    approved_at timestamptz,

    created_at timestamptz
        not null default now()
);

-- Repayments
create table public.repayments (
    id uuid primary key default gen_random_uuid(),

    loan_id uuid
        not null
        references public.loans(id)
        on delete cascade,

    amount numeric(12,2)
        not null,

    payment_date timestamptz
        not null default now(),

    recorded_by text
    references public.profiles(id),

    created_at timestamptz
        not null default now()
);