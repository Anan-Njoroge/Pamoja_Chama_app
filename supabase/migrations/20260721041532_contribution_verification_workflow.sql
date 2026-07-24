/*
===============================================================================
Contribution Verification Fields
===============================================================================
*/

alter table public.contributions

add column if not exists verified_by uuid
references public.profiles(id)
on delete set null,

add column if not exists verified_at timestamptz,

add column if not exists rejection_reason text;

create index if not exists idx_contributions_verified_by
on public.contributions(verified_by);