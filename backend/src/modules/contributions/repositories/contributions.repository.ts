import { BaseRepository } from "@/shared/database/BaseRepository";

import {
  CreateContributionDto,
} from "../types/contributions.types";

export class ContributionsRepository extends BaseRepository {

  /**
   * ============================================================================
   * Record Contribution
   * ============================================================================
   */
  async recordContribution(

    recordedBy: string,

    dto: CreateContributionDto,

  ) {

    const { data, error } =
      await this.db

        .from("contributions")

        .insert({

          group_id:
            dto.groupId,

          member_id:
            dto.memberId,

          contribution_type_id:
            dto.contributionTypeId,

          payment_method_id:
            dto.paymentMethodId,

          amount:
            dto.amount,

          payment_date:
            dto.paymentDate ??
            new Date().toISOString(),

          receipt_number:
            dto.receiptNumber ?? null,

          notes:
            dto.notes ?? null,

          recorded_by:
            recordedBy,

          status:
            "approved",

        })

        .select()

        .single();

    this.handleError(

      error,

      "Unable to record contribution.",

    );

    return this.ensureFound(data);

  }

  /**
   * ============================================================================
   * Find Contribution
   * ============================================================================
   */
  async findById(

    contributionId: string,

  ) {

    const { data, error } =
      await this.db

        .from("contributions")

        .select("*")

        .eq("id", contributionId)

        .single();

    this.handleError(error);

    return this.ensureFound(

      data,

      "Contribution not found.",

    );

  }

  /**
   * ============================================================================
   * Group Contributions
   * ============================================================================
   */
  async findGroupContributions(

    groupId: string,

  ) {

    const { data, error } =
      await this.db

        .from("contributions")

        .select("*")

        .eq(

          "group_id",

          groupId,

        )

        .is(

          "deleted_at",

          null,

        )

        .order(

          "payment_date",

          {

            ascending: false,

          },

        );

    this.handleError(error);

    return data ?? [];

  }

  /**
   * ============================================================================
   * Receipt Exists
   * ============================================================================
   */
  async receiptExists(

    receiptNumber: string,

  ) {

    const { data, error } =
      await this.db

        .from("contributions")

        .select("id")

        .eq(

          "receipt_number",

          receiptNumber,

        )

        .maybeSingle();

    this.handleError(error);

    return !!data;

  }
  /**
   * ============================================================================
   * Update Member Balance
   * ============================================================================
   */
  async updateMemberBalance(

    groupId: string,

    memberId: string,

    amount: number,

  ) {

    const { data } =
      await this.db

        .from("member_balances")

        .select("*")

        .eq("group_id", groupId)

        .eq("member_id", memberId)

        .maybeSingle();

    if (!data) {

      const { error } =
        await this.db

          .from("member_balances")

          .insert({

            group_id: groupId,

            member_id: memberId,

            total_contributed: amount,

            total_transactions: 1,

          });

      this.handleError(error);

      return;

    }

    const { error } =
      await this.db

        .from("member_balances")

        .update({

          total_contributed:
            Number(data.total_contributed) + amount,

          total_transactions:
            Number(data.total_transactions) + 1,

        })

        .eq("group_id", groupId)

        .eq("member_id", memberId);

    this.handleError(error);

  }

  /**
   * ============================================================================
   * Update Monthly Contributions
   * ============================================================================
   */
  async updateMonthlyContribution(

    groupId: string,

    paymentDate: string,

    amount: number,

  ) {

    const month =
      new Date(paymentDate);

    month.setDate(1);

    month.setHours(0, 0, 0, 0);

    const { data } =
      await this.db

        .from("monthly_contributions")

        .select("*")

        .eq("group_id", groupId)

        .eq(

          "month",

          month.toISOString(),

        )

        .maybeSingle();

    if (!data) {

      const { error } =
        await this.db

          .from("monthly_contributions")

          .insert({

            group_id: groupId,

            month: month.toISOString(),

            total: amount,

            payments: 1,

          });

      this.handleError(error);

      return;

    }

    const { error } =
      await this.db

        .from("monthly_contributions")

        .update({

          total:
            Number(data.total) + amount,

          payments:
            Number(data.payments) + 1,

        })

        .eq("group_id", groupId)

        .eq(

          "month",

          month.toISOString(),

        );

    this.handleError(error);

  }

  /**
   * ============================================================================
   * Update Group Financial Summary
   * ============================================================================
   */
  async updateFinancialSummary(

    groupId: string,

    paymentDate: string,

    amount: number,

  ) {

    const { data } =
      await this.db

        .from("group_financial_summary")

        .select("*")

        .eq("group_id", groupId)

        .single();

    const totalCollected =
      Number(data.total_collected) + amount;

    const totalTransactions =
      Number(data.total_transactions) + 1;

    const averagePayment =
      totalCollected / totalTransactions;

    const { error } =
      await this.db

        .from("group_financial_summary")

        .update({

          total_collected:
            totalCollected,

          total_transactions:
            totalTransactions,

          average_payment:
            averagePayment,

          last_payment:
            paymentDate,

        })

        .eq("group_id", groupId);

    this.handleError(error);

  }

  /**
   * ============================================================================
   * Verify Contribution
   * ============================================================================
   */
  async verifyContribution(

    contributionId: string,

    verifierId: string,

  ) {

    const { error } =
      await this.db

        .from("contributions")

        .update({

          status: "approved",

          verified_by: verifierId,

          verified_at:
            new Date().toISOString(),

          rejection_reason: null,

        })

        .eq("id", contributionId);

    this.handleError(error);

  }

  /**
   * ============================================================================
   * Reject Contribution
   * ============================================================================
   */
  async rejectContribution(

    contributionId: string,

    verifierId: string,

    reason: string,

  ) {

    const { error } =
      await this.db

        .from("contributions")

        .update({

          status: "rejected",

          verified_by: verifierId,

          verified_at:
            new Date().toISOString(),

          rejection_reason:
            reason,

        })

        .eq("id", contributionId);

    this.handleError(error);

  }

  /**
   * ============================================================================
   * Soft Delete Contribution
   * ============================================================================
   */
  async softDeleteContribution(

    contributionId: string,

  ) {

    const { error } =
      await this.db

        .from("contributions")

        .update({

          deleted_at:
            new Date().toISOString(),

        })

        .eq("id", contributionId);

    this.handleError(error);

  }

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
   * Group Financial Summary
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

        .single();

    this.handleError(error);

    return data;

  }

}