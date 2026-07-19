/*
===============================================================================
Row Level Security Policies
===============================================================================
*/

-- ============================================================================
-- PROFILES
-- ============================================================================

create policy "Users can view their own profile"

on public.profiles

for select

using (

    auth.uid() = id

);

create policy "Users can update their own profile"

on public.profiles

for update

using (

    auth.uid() = id

);

create policy "Users can insert their own profile"

on public.profiles

for insert

with check (

    auth.uid() = id

);

-- ============================================================================
-- GROUPS
-- ============================================================================

create policy "Members can view their groups"

on public.groups

for select

using (

    exists (

        select 1

        from public.group_members gm

        where gm.group_id = groups.id

        and gm.user_id = auth.uid()

    )

);

create policy "Admins can create groups"

on public.groups

for insert

with check (

    created_by = auth.uid()

);

create policy "Admins can update groups"

on public.groups

for update

using (

    created_by = auth.uid()

);

-- ============================================================================
-- GROUP MEMBERS
-- ============================================================================

create policy "Members can view group membership"

on public.group_members

for select

using (

    exists (

        select 1

        from public.group_members gm

        where gm.group_id = group_members.group_id

        and gm.user_id = auth.uid()

    )

);

create policy "Admins manage memberships"

on public.group_members

for all

using (

    exists (

        select 1

        from public.group_members gm

        where gm.group_id = group_members.group_id

        and gm.user_id = auth.uid()

        and gm.role = 'admin'

    )

);