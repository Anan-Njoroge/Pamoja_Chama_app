/*
===============================================================================
Prevent Duplicate Receipt Numbers
===============================================================================
*/

create unique index if not exists
idx_contributions_receipt_number

on public.contributions(receipt_number)

where receipt_number is not null;