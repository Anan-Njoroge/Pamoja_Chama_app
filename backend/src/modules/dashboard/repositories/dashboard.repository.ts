import { BaseRepository } from "@/shared/database/BaseRepository";

export class DashboardRepository extends BaseRepository {

  /**
   * ============================================================================
   * Member Balance
   * ============================================================================
   */
  async getMemberBalance(

    groupId: string,

    memberId: string,

  ) {

    const { data, error } =

      await this.db

        .from("member_balances")

        .select("*")

        .eq("group_id", groupId)

        .eq("member_id", memberId)

        .maybeSingle();

    this.handleError(error);

    return data;

  }

  /**
   * ============================================================================
   * Unread Notifications
   * ============================================================================
   */
  async getUnreadNotifications(

    userId: string,

  ) {

    const { count, error } =

      await this.db

        .from("notifications")

        .select("*", {

          count: "exact",

          head: true,

        })

        .eq("user_id", userId)

        .eq("is_read", false);

    this.handleError(error);

    return count ?? 0;

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

        .from("meetings")

        .select("meeting_date")

        .eq("group_id", groupId)

        .gte(

          "meeting_date",

          new Date().toISOString(),

        )

        .order(

          "meeting_date",

          {

            ascending: true,

          },

        )

        .limit(1)

        .maybeSingle();

    this.handleError(error);

    return data;

  }

  /**
   * ============================================================================
   * Financial Summary
   * ============================================================================
   */
  async getFinancialSummary(

    groupId: string,

  ) {

    const { data, error } =

      await this.db

        .from("group_financial_summary")

        .select("*")

        .eq("group_id", groupId)

        .maybeSingle();

    this.handleError(error);

    return data;

  }

  /**
   * ============================================================================
   * Total Members
   * ============================================================================
   */
  async getTotalMembers(

    groupId: string,

  ) {

    const { count, error } =

      await this.db

        .from("group_members")

        .select("*", {

          count: "exact",

          head: true,

        })

        .eq("group_id", groupId)

        .eq("status", "active");

    this.handleError(error);

    return count ?? 0;

  }

  /**
   * ============================================================================
   * Pending Contribution Verifications
   * ============================================================================
   */
  async getPendingVerifications(

    groupId: string,

  ) {

    const { count, error } =

      await this.db

        .from("contributions")

        .select("*", {

          count: "exact",

          head: true,

        })

        .eq("group_id", groupId)

        .eq("status", "pending");

    this.handleError(error);

    return count ?? 0;

  }

  /**
   * ============================================================================
   * Monthly Collection
   * ============================================================================
   */
  async getMonthlyCollection(

    groupId: string,

  ) {

    const start = new Date();

    start.setDate(1);

    start.setHours(0, 0, 0, 0);

    const { data, error } =

      await this.db

        .from("monthly_contributions")

        .select("*")

        .eq("group_id", groupId)

        .gte(

          "month",

          start.toISOString(),

        )

        .maybeSingle();

    this.handleError(error);

    return data;

  }

}