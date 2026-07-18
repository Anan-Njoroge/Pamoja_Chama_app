-- ============================================================================
-- Meeting Status
-- ============================================================================

create type meeting_status as enum (
    'scheduled',
    'completed',
    'cancelled'
);

-- ============================================================================
-- Meetings
-- ============================================================================

create table public.meetings (
    id uuid primary key default gen_random_uuid(),

    group_id uuid
        not null
        references public.groups(id)
        on delete cascade,

    title text not null,

    description text,

    meeting_date timestamptz not null,

    status meeting_status
        not null default 'scheduled',

    created_by text
    references public.profiles(id),

    created_at timestamptz
        not null default now(),

    updated_at timestamptz
        not null default now()
);

-- ============================================================================
-- Attendance
-- ============================================================================

create type attendance_status as enum (
    'present',
    'absent',
    'excused'
);

create table public.attendance (
    id uuid primary key default gen_random_uuid(),

    meeting_id uuid
        not null
        references public.meetings(id)
        on delete cascade,

    membership_id uuid
        not null
        references public.memberships(id)
        on delete cascade,

    status attendance_status
        not null default 'present',

    recorded_at timestamptz
        not null default now(),

    unique(meeting_id, membership_id)
);