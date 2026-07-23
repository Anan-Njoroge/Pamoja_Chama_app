import { BaseRepository } from '@/shared/database/BaseRepository';

export class DashboardRepository extends BaseRepository {

  /**
   * ============================================================================
   * Member Statistics
   * ============================================================================
   */
  async getMemberStats(
    memberId: string,
  ) {

    const now = new Date();
    const monthStart = new Date(
      now.getFullYear(),
      now.getMonth(),
      1,
    ).toISOString();

    const [
      total,
      monthly,
      pending,
      meetings,
      notifications,
    ] = await Promise.all([

      this.db
        .from('contributions')
        .select('id', { count: 'exact', head: true })
        .eq('member_id', memberId)
        .eq('status', 'approved'),

      this.db
        .from('contributions')
        .select('id', { count: 'exact', head: true })
        .eq('member_id', memberId)
        .eq('status', 'approved')
        .gte('payment_date', monthStart),

      this.db
        .from('contributions')
        .select('id', { count: 'exact', head: true })
        .eq('member_id', memberId)
        .eq('status', 'pending'),

      this.db
        .from('meetings')
        .select('id', { count: 'exact', head: true })
        .gte('meeting_date', now.toISOString())
        .eq('status', 'scheduled'),

      this.db
        .from('notifications')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', memberId)
        .eq('is_read', false),

    ]);

    return {

      totalContributions:
        total.count ?? 0,

      monthlyContributions:
        monthly.count ?? 0,

      pendingContributions:
        pending.count ?? 0,

      totalMeetings:
        meetings.count ?? 0,

      upcomingMeetings:
        meetings.count ?? 0,

      totalNotifications:
        notifications.count ?? 0,

    };

  }

  /**
   * ============================================================================
   * Treasurer Statistics
   * ============================================================================
   */
  async getTreasurerStats(
    groupId: string,
  ) {

    const now = new Date();

    const monthStart = new Date(
      now.getFullYear(),
      now.getMonth(),
      1,
    ).toISOString();

    const [

      members,

      contributions,

      pending,

      meetings,

      notifications,

    ] = await Promise.all([

      this.db
        .from('group_members')
        .select('id', { count: 'exact', head: true })
        .eq('group_id', groupId)
        .eq('status', 'active'),

      this.db
        .from('contributions')
        .select('amount, payment_date')
        .eq('group_id', groupId)
        .eq('status', 'approved'),

      this.db
        .from('contributions')
        .select('id', { count: 'exact', head: true })
        .eq('group_id', groupId)
        .eq('status', 'pending'),

      this.db
        .from('meetings')
        .select('id', { count: 'exact', head: true })
        .gte('meeting_date', now.toISOString())
        .eq('status', 'scheduled'),

      this.db
        .from('notifications')
        .select('id', { count: 'exact', head: true })
        .eq('group_id', groupId)
        .eq('is_read', false),

    ]);

    const totalCollected =
      (contributions.data ?? []).reduce(
        (sum, row) => sum + Number(row.amount),
        0,
      );

    const monthlyCollected =
      (contributions.data ?? [])
        .filter(
          (row: any) =>
            row.payment_date >= monthStart,
        )
        .reduce(
          (sum, row: any) =>
            sum + Number(row.amount),
          0,
        );

    return {

      totalMembers:
        members.count ?? 0,

      activeMembers:
        members.count ?? 0,

      totalCollected,

      pendingApprovals:
        pending.count ?? 0,

      totalContributions:
        totalCollected,

      monthlyContributions:
        monthlyCollected,

      pendingContributions:
        pending.count ?? 0,

      totalMeetings:
        meetings.count ?? 0,

      upcomingMeetings:
        meetings.count ?? 0,

      totalNotifications:
        notifications.count ?? 0,

    };

  }

  /**
   * ============================================================================
   * Upcoming Meeting
   * ============================================================================
   */
  async getUpcomingMeeting(
    groupId: string,
  ) {

    const { data, error } =
      await this.db
        .from('meetings')
        .select('*')
        .eq('group_id', groupId)
        .eq('status', 'scheduled')
        .gte(
          'meeting_date',
          new Date().toISOString(),
        )
        .order(
          'meeting_date',
          { ascending: true },
        )
        .limit(1)
        .maybeSingle();

    this.handleError(error);

    return data;

  }

  /**
   * ============================================================================
   * Recent Contributions
   * ============================================================================
   */
  async getRecentContributions(
    memberId: string,
  ) {

    const { data, error } =
      await this.db
        .from('contributions')
        .select(`
          id,
          amount,
          payment_date,
          status,
          contribution_types(name)
        `)
        .eq('member_id', memberId)
        .order(
          'payment_date',
          { ascending: false },
        )
        .limit(5);

    this.handleError(error);

    return data ?? [];

  }

  /**
   * ============================================================================
   * Notifications
   * ============================================================================
   */
  async getNotifications(
    userId: string,
  ) {

    const { data, error } =
      await this.db
        .from('notifications')
        .select('*')
        .eq('user_id', userId)
        .order(
          'created_at',
          { ascending: false },
        )
        .limit(5);

    this.handleError(error);

    return data ?? [];

  }

}