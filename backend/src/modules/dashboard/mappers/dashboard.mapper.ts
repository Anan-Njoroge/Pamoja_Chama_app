import {

  MemberDashboardDto,
  TreasurerDashboardDto,

} from "../types/dashboard.types";

/**
 * ============================================================================
 * Member Dashboard Mapper
 * ============================================================================
 */

export function toMemberDashboardDto(

  data: any,

): MemberDashboardDto {

  return {

    totalContributed:

      Number(

        data.total_contributed ?? 0,

      ),

    totalTransactions:

      Number(

        data.total_transactions ?? 0,

      ),

    upcomingMeeting:

      data.upcomingMeeting ?? null,

    notifications:

      Number(

        data.notifications ?? 0,

      ),

  };

}

/**
 * ============================================================================
 * Treasurer Dashboard Mapper
 * ============================================================================
 */

export function toTreasurerDashboardDto(

  data: any,

): TreasurerDashboardDto {

  return {

    totalMembers:

      Number(

        data.totalMembers ?? 0,

      ),

    totalCollected:

      Number(

        data.totalCollected ?? 0,

      ),

    totalTransactions:

      Number(

        data.totalTransactions ?? 0,

      ),

    monthlyCollection:

      Number(

        data.monthlyCollection ?? 0,

      ),

    pendingVerifications:

      Number(

        data.pendingVerifications ?? 0,

      ),

    upcomingMeeting:

      data.upcomingMeeting ?? null,

  };

}