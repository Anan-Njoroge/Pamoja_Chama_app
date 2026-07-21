import { AppError } from '@/shared/errors/AppError';

import { ContributionsRepository } from '../repositories/contributions.repository';

import { toContributionDto } from '../mappers/contributions.mapper';

import {
  CreateContributionDto,
} from '../types/contributions.types';

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
  async createContribution(

    currentUserId: string,

    dto: CreateContributionDto,

  ) {

    /**
     * Prevent duplicate receipt numbers
     */
    if (dto.receiptNumber) {

      const exists =
        await this.repository.receiptExists(
          dto.receiptNumber,
        );

      if (exists) {

        throw new AppError(

          'Receipt number already exists.',

          400,

        );

      }

    }

    /**
     * Determine the user's role in this group
     */
    const membership =
      await this.repository.getMemberRole(

        dto.groupId,

        currentUserId,

      );

    const autoApprove =

      membership.role === 'group_admin';

    /**
     * Create contribution
     */
    const contribution =
      await this.repository.createContribution(

        currentUserId,

        currentUserId,

        dto,

        autoApprove
          ? 'approved'
          : 'pending',

        autoApprove
          ? currentUserId
          : undefined,

      );

    return toContributionDto(
      contribution,
    );

  }

  /**
   * ============================================================================
   * My Contributions
   * ============================================================================
   */
  async getMyContributions(

    memberId: string,

  ) {

    const contributions =

      await this.repository.findByMember(
        memberId,
      );

    return contributions.map(
      toContributionDto,
    );

  }

  /**
   * ============================================================================
   * Pending Contributions
   * ============================================================================
   */
  async getPendingContributions(

    groupId: string,

  ) {

    const contributions =

      await this.repository.findPending(
        groupId,
      );

    return contributions.map(
      toContributionDto,
    );

  }

  /**
   * ============================================================================
   * Approve Contribution
   * ============================================================================
   */
  async approveContribution(

    contributionId: string,

    verifierId: string,

  ) {

    const contribution =

      await this.repository.findById(
        contributionId,
      );

    if (

      contribution.status !==
      'pending'

    ) {

      throw new AppError(

        'Only pending contributions can be approved.',

        400,

      );

    }

    const updated =

      await this.repository.approveContribution(

        contributionId,

        verifierId,

      );

    return toContributionDto(
      updated,
    );

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

    if (

      contribution.status !==
      'pending'

    ) {

      throw new AppError(

        'Only pending contributions can be rejected.',

        400,

      );

    }

    const updated =

      await this.repository.rejectContribution(

        contributionId,

        verifierId,

        reason,

      );

    return toContributionDto(
      updated,
    );

  }

}