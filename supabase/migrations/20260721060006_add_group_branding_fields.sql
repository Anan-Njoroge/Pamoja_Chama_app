/*
===============================================================================
Group Branding Fields
===============================================================================

Adds branding information used by reports, PDFs,
and future group customization.
*/

-- ============================================================================
-- Add branding fields
-- ============================================================================

alter table public.groups

add column if not exists logo_url text,

add column if not exists location text;

-- ============================================================================
-- Comments
-- ============================================================================

comment on column public.groups.logo_url is
'Public URL of the group logo stored in Supabase Storage.';

comment on column public.groups.location is
'Physical location or meeting location of the group.';