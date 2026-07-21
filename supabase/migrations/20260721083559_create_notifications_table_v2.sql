/*
===============================================================================
Notifications
===============================================================================
*/

-- ============================================================================
-- Create notification type
-- ============================================================================

do $$
begin
    if not exists (
        select 1
        from pg_type
        where typname = 'notification_type'
    ) then

        create type public.notification_type as enum (

            'contribution_recorded',

            'contribution_approved',

            'contribution_rejected',

            'member_invited',

            'member_joined'

        );

    end if;
end $$;

-- ============================================================================
-- Notifications table
-- ============================================================================

create table if not exists public.notifications (

    id uuid primary key default gen_random_uuid(),

    user_id uuid not null
        references public.profiles(id)
        on delete cascade,

    group_id uuid
        references public.groups(id)
        on delete cascade,

    type public.notification_type not null,

    title text not null,

    message text not null,

    is_read boolean not null default false,

    created_at timestamptz not null default now()

);

-- ============================================================================
-- Indexes
-- ============================================================================

create index if not exists idx_notifications_user
on public.notifications(user_id);

create index if not exists idx_notifications_read
on public.notifications(is_read);

create index if not exists idx_notifications_created
on public.notifications(created_at desc);