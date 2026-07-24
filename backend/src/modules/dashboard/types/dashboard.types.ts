/**
 * ============================================================================
 * Member Dashboard DTO
 * ============================================================================
 */

export interface MemberDashboardDto {

  totalContributed: number;

  totalTransactions: number;

  upcomingMeeting: string | null;

  notifications: number;

}

/**
 * ============================================================================
 * Treasurer Dashboard DTO
 * ============================================================================
 */

export interface TreasurerDashboardDto {

  totalMembers: number;

  totalCollected: number;

  totalTransactions: number;

  monthlyCollection: number;

  pendingVerifications: number;

  upcomingMeeting: string | null;

}