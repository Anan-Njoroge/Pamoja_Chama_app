/**
 * ============================================================================
 * User Roles
 * ============================================================================
 */

export const USER_ROLES = {
  MEMBER: 'member',
  TREASURER: 'treasurer',
  ADMINISTRATOR: 'administrator',
} as const;

export type UserRole =
  (typeof USER_ROLES)[keyof typeof USER_ROLES];