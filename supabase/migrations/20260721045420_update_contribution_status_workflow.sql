/*
===============================================================================
Update Contribution Status Workflow
===============================================================================
*/

-- ============================================================================
-- Rename enum values
-- ============================================================================

alter type public.contribution_status
rename value 'completed' to 'approved';

-- ============================================================================
-- Add missing workflow state
-- ============================================================================

alter type public.contribution_status
add value if not exists 'pending';

alter type public.contribution_status
add value if not exists 'rejected';

-- ============================================================================
-- Default becomes pending
-- ============================================================================

alter table public.contributions

alter column status

set default 'pending';