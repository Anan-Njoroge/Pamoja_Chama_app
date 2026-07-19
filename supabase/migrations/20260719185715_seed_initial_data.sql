/*
===============================================================================
Initial Application Data
===============================================================================
*/

insert into public.groups (

    id,

    name,

    description,

    currency

)

values (

    '11111111-1111-1111-1111-111111111111',

    'Pamoja Demo Chama',

    'Default demonstration group',

    'KES'

)

on conflict do nothing;