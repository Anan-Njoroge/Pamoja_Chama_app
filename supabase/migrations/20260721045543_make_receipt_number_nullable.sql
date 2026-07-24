/*
===============================================================================
Receipt Number Improvements
===============================================================================
*/

alter table public.contributions

alter column receipt_number

drop not null;