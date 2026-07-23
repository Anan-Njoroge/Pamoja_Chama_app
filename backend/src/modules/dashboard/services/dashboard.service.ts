import { DashboardRepository } from '../repositories/dashboard.repository';

import {
  MemberDashboard,
  TreasurerDashboard,
} from '../types/dashboard.types';

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

    memberId: string,

    groupId: string,

  ): Promise<MemberDashboard> {

    const [

      stats,

      meeting,

      contributions,

      notifications,

    ] = await Promise.all([

      this.repository.getMemberStats(
        memberId,
      ),

      this.repository.getUpcomingMeeting(
        groupId,
      ),

      this.repository.getRecentContributions(
        memberId,
      ),

      this.repository.getNotifications(
        memberId,
      ),

    ]);

    return {

      stats,

      upcomingMeeting: meeting
        ? {

            id: meeting.id,

            title: meeting.title,

            meetingDate:
              meeting.meeting_date,

            location:
              meeting.location,

          }
        : null,

      recentContributions:
        contributions.map((c: any) => ({

          id: c.id,

          amount: Number(c.amount),

          paymentDate:
            c.payment_date,

          status: c.status,

          contributionType:
            c.contribution_types?.name ??
            '',

        })),

      notifications:
        notifications.map((n: any) => ({

          id: n.id,

          title: n.title,

          message: n.message,

          isRead: n.is_read,

          createdAt:
            n.created_at,

        })),

    };

  }

  /**
   * ============================================================================
   * Treasurer Dashboard
   * ============================================================================
   */
  async getTreasurerDashboard(

    memberId: string,

    groupId: string,

  ): Promise<TreasurerDashboard> {

    const [

      stats,

      meeting,

      contributions,

      notifications,

    ] = await Promise.all([

      this.repository.getTreasurerStats(
        groupId,
      ),

      this.repository.getUpcomingMeeting(
        groupId,
      ),

      this.repository.getRecentContributions(
        memberId,
      ),

      this.repository.getNotifications(
        memberId,
      ),

    ]);

    return {

      stats,

      upcomingMeeting: meeting
        ? {

            id: meeting.id,

            title: meeting.title,

            meetingDate:
              meeting.meeting_date,

            location:
              meeting.location,

          }
        : null,

      recentContributions:
        contributions.map((c: any) => ({

          id: c.id,

          amount: Number(c.amount),

          paymentDate:
            c.payment_date,

          status: c.status,

          contributionType:
            c.contribution_types?.name ??
            '',

        })),

      notifications:
        notifications.map((n: any) => ({

          id: n.id,

          title: n.title,

          message: n.message,

          isRead: n.is_read,

          createdAt:
            n.created_at,

        })),

    };

  }

}