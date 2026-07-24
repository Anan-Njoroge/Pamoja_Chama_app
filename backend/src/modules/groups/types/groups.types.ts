/**
 * ============================================================================
 * Create Group
 * ============================================================================
 */
export interface CreateGroupDto {
  name: string;

  description?: string;

  currency: string;

  meetingDay?: string;

  meetingTime?: string;
}

/**
 * ============================================================================
 * Invite Member
 * ============================================================================
 *
 * Used by the Treasurer when onboarding a new member.
 */
export interface InviteMemberDto {
  fullName: string;

  nationalId: string;

  phone: string;
}

/**
 * ============================================================================
 * Group DTO
 * ============================================================================
 */
export interface GroupDto {
  id: string;

  name: string;

  description: string | null;

  currency: string;

  meetingDay: string | null;

  meetingTime: string | null;

  createdBy: string;

  createdAt: string;
}