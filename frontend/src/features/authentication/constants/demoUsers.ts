/**
 * ============================================================================
 * Demo Users
 * ============================================================================
 *
 * Temporary users for the MVP.
 *
 * These will later come from the backend.
 */

import type {

  AuthUser,

} from '../types/auth.types';

export const DEMO_USERS: AuthUser[] = [

  {

    id: '1',

    fullName: 'Mary Wanjiku',

    phoneNumber: '0711111111',

    role: 'member',

    groupId: 'group-001',

  },

  {

    id: '2',

    fullName: 'Peter Mwangi',

    phoneNumber: '0722222222',

    role: 'treasurer',

    groupId: 'group-001',

  },

  {

    id: '3',

    fullName: 'Grace Njeri',

    phoneNumber: '0733333333',

    role: 'administrator',

    groupId: 'group-001',

  },

];

export const DEMO_OTP = '123456';