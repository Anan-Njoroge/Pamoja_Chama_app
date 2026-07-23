/*
===============================================================================
Meetings Module
===============================================================================
*/

-- ============================================================================
-- Meeting Status
-- ============================================================================

DO $$
BEGIN

IF NOT EXISTS (

    SELECT 1
    FROM pg_type
    WHERE typname = 'meeting_status'

) THEN

    CREATE TYPE public.meeting_status AS ENUM (

        'scheduled',
        'completed',
        'cancelled'

    );

END IF;

END $$;


-- ============================================================================
-- Attendance Status
-- ============================================================================

DO $$
BEGIN

IF NOT EXISTS (

    SELECT 1
    FROM pg_type
    WHERE typname = 'attendance_status'

) THEN

    CREATE TYPE public.attendance_status AS ENUM (

        'present',
        'absent',
        'late'

    );

END IF;

END $$;


-- ============================================================================
-- Meetings
-- ============================================================================

CREATE TABLE IF NOT EXISTS public.meetings (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    group_id UUID NOT NULL
        REFERENCES public.groups(id)
        ON DELETE CASCADE,

    title TEXT NOT NULL,

    description TEXT,

    location TEXT,

    meeting_date TIMESTAMPTZ NOT NULL,

    status meeting_status
        NOT NULL
        DEFAULT 'scheduled',

    minutes TEXT,

    created_by UUID NOT NULL
        REFERENCES public.profiles(id),

    created_at TIMESTAMPTZ
        DEFAULT now(),

    updated_at TIMESTAMPTZ
        DEFAULT now()

);


-- ============================================================================
-- Attendance
-- ============================================================================

CREATE TABLE IF NOT EXISTS public.meeting_attendance (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    meeting_id UUID NOT NULL
        REFERENCES public.meetings(id)
        ON DELETE CASCADE,

    member_id UUID NOT NULL
        REFERENCES public.profiles(id)
        ON DELETE CASCADE,

    status attendance_status
        NOT NULL
        DEFAULT 'absent',

    checked_in_at TIMESTAMPTZ,

    UNIQUE (

        meeting_id,

        member_id

    )

);


-- ============================================================================
-- Indexes
-- ============================================================================

CREATE INDEX IF NOT EXISTS idx_meetings_group
ON public.meetings(group_id);

CREATE INDEX IF NOT EXISTS idx_meetings_date
ON public.meetings(meeting_date);

CREATE INDEX IF NOT EXISTS idx_attendance_meeting
ON public.meeting_attendance(meeting_id);

CREATE INDEX IF NOT EXISTS idx_attendance_member
ON public.meeting_attendance(member_id);