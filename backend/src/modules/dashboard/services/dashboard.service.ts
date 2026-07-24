import { DashboardRepository } from "../repositories/dashboard.repository";

import {
  toMemberDashboardDto,
  toTreasurerDashboardDto,
} from "../mappers/dashboard.mapper";

export class DashboardService {

  constructor(

    private readonly repository =
      new DashboardRepository(),

  ) {}

  /**
   * ============================================================================
   * Member Dashboard
   * ============================================================================
   */
  async getMemberDashboard(

    groupId: string,

    memberId: string,

  ) {

    const [

      balance,

      meeting,

      notifications,

    ] = await Promise.all([

      this.repository.getMemberBalance(

        groupId,

        memberId,

      ),

      this.repository.getUpcomingMeeting(

        groupId,

      ),

      this.repository.getUnreadNotifications(

        memberId,

      ),

    ]);

    return toMemberDashboardDto({

      total_contributed:

        balance?.total_contributed ?? 0,

      total_transactions:

        balance?.total_transactions ?? 0,

      upcomingMeeting:

        meeting?.meeting_date ?? null,

      notifications,

    });

  }

  /**
   * ============================================================================
   * Treasurer Dashboard
   * ============================================================================
   */
  async getTreasurerDashboard(

    groupId: string,

  ) {

    const [

      summary,

      members,

      pending,

      meeting,

      monthly,

    ] = await Promise.all([

      this.repository.getFinancialSummary(

        groupId,

      ),

      this.repository.getTotalMembers(

        groupId,

      ),

      this.repository.getPendingVerifications(

        groupId,

      ),

      this.repository.getUpcomingMeeting(

        groupId,

      ),

      this.repository.getMonthlyCollection(

        groupId,

      ),

    ]);

    return toTreasurerDashboardDto({

      totalMembers:

        members,

      totalCollected:

        summary?.total_collected ?? 0,

      totalTransactions:

        summary?.total_transactions ?? 0,

      monthlyCollection:

        monthly?.total ?? 0,

      pendingVerifications:

        pending,

      upcomingMeeting:

        meeting?.meeting_date ?? null,

    });

  }

}
