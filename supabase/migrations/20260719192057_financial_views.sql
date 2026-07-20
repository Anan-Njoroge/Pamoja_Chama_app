/*
===============================================================================
Financial Views & Receipt Generator
===============================================================================
*/

-- ============================================================================
-- Receipt Number Generator
-- ============================================================================

create sequence if not exists receipt_sequence;

create or replace function public.generate_receipt_number()

returns trigger

language plpgsql

as
$$
begin

    if new.receipt_number is null then

        new.receipt_number :=

            'RCPT-' ||

            to_char(current_date,'YYYY') ||

            '-' ||

            lpad(

                nextval('receipt_sequence')::text,

                6,

                '0'

            );

    end if;

    return new;

end;
$$;

create trigger generate_receipt

before insert

on public.contributions

for each row

execute function public.generate_receipt_number();

-- ============================================================================
-- Member Balances
-- ============================================================================

create or replace view public.member_balances as

select

    member_id,

    group_id,

    sum(amount) as total_contributed,

    count(*) as total_transactions

from public.contributions

where deleted_at is null

group by

    member_id,

    group_id;

-- ============================================================================
-- Group Summary
-- ============================================================================

create or replace view public.group_financial_summary as

select

    group_id,

    sum(amount) as total_collected,

    count(*) as total_transactions,

    avg(amount) as average_payment,

    max(payment_date) as last_payment

from public.contributions

where deleted_at is null

group by group_id;

-- ============================================================================
-- Monthly Summary
-- ============================================================================

create or replace view public.monthly_contributions as

select

    group_id,

    date_trunc('month',payment_date) as month,

    sum(amount) as total,

    count(*) as payments

from public.contributions

where deleted_at is null

group by

    group_id,

    date_trunc('month',payment_date);