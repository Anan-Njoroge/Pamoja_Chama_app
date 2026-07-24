import { AppError } from "@/shared/errors/AppError";

import { toContributionDto } from "../mappers/contributions.mapper";
import { ContributionsRepository } from "../repositories/contributions.repository";

import {
  CreateContributionDto,
} from "../types/contributions.types";

export class ContributionsService {

  constructor(

    private readonly repository =
      new ContributionsRepository(),

  ) {}

  /**
   * ============================================================================
   * Record Contribution
   * ============================================================================
   */
  async recordContribution(

    recordedBy: string,

    dto: CreateContributionDto,

  ) {

    /**
     * ------------------------------------------------------------
     * Prevent duplicate receipt numbers.
     * ------------------------------------------------------------
     */

    if (dto.receiptNumber) {

      const exists =

        await this.repository.receiptExists(

          dto.receiptNumber,

        );

      if (exists) {

        throw new AppError(

          "Receipt number already exists.",

          409,

        );

      }

    }

    /**
     * ------------------------------------------------------------
     * Record contribution.
     * ------------------------------------------------------------
     */

    const contribution =

      await this.repository.recordContribution(

        recordedBy,

        dto,

      );

    /**
     * ------------------------------------------------------------
     * Update member balances.
     * ------------------------------------------------------------
     */

    await this.repository.updateMemberBalance(

      dto.groupId,

      dto.memberId,

      dto.amount,

    );

    /**
     * ------------------------------------------------------------
     * Update monthly totals.
     * ------------------------------------------------------------
     */

    await this.repository.updateMonthlyContribution(

      dto.groupId,

      contribution.payment_date,

      dto.amount,

    );

    /**
     * ------------------------------------------------------------
     * Update financial summary.
     * ------------------------------------------------------------
     */

    await this.repository.updateFinancialSummary(

      dto.groupId,

      contribution.payment_date,

      dto.amount,

    );

    return toContributionDto(

      contribution,

    );

  }

  /**
   * ============================================================================
   * Get Contribution
   * ============================================================================
   */
  async getContribution(

    contributionId: string,

  ) {

    const contribution =

      await this.repository.findById(

        contributionId,

      );

    return toContributionDto(

      contribution,

    );

  }

  /**
   * ============================================================================
   * List Group Contributions
   * ============================================================================
   */
  async getGroupContributions(

    groupId: string,

  ) {

    const contributions =

      await this.repository.findGroupContributions(

        groupId,

      );

    return contributions.map(

      toContributionDto,

    );

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

    const contribution =

      await this.repository.findById(

        contributionId,

      );

    if (!contribution) {

      throw new AppError(

        "Contribution not found.",

        404,

      );

    }

    await this.repository.verifyContribution(

      contributionId,

      verifierId,

    );

    return {

      success: true,

      message:
        "Contribution verified successfully.",

    };

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

    const contribution =

      await this.repository.findById(

        contributionId,

      );

    if (!contribution) {

      throw new AppError(

        "Contribution not found.",

        404,

      );

    }

    await this.repository.rejectContribution(

      contributionId,

      verifierId,

      reason,

    );

    return {

      success: true,

      message:
        "Contribution rejected successfully.",

    };

  }

  /**
   * ============================================================================
   * Delete Contribution
   * ============================================================================
   */
  async deleteContribution(

    contributionId: string,

  ) {

    const contribution =

      await this.repository.findById(

        contributionId,

      );

    if (!contribution) {

      throw new AppError(

        "Contribution not found.",

        404,

      );

    }

    await this.repository.softDeleteContribution(

      contributionId,

    );

    return {

      success: true,

      message:
        "Contribution deleted successfully.",

    };

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

    return await this.repository.getMemberBalance(

      groupId,

      memberId,

    );

  }

  /**
   * ============================================================================
   * Financial Summary
   * ============================================================================
   */
  async getFinancialSummary(

    groupId: string,

  ) {

    return await this.repository.getFinancialSummary(

      groupId,

    );

  }

}