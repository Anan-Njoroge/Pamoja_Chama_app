import { AppError } from '@/shared/errors/AppError';

import { ContributionsRepository } from '../repositories/contributions.repository';

import { toContributionDto } from '../mappers/contributions.mapper';

import {
  CreateContributionDto,
} from '../types/contributions.types';

import { NotificationsService } from '@/modules/notifications/services/notifications.service';

export class ContributionsService {

  constructor(

    private readonly repository =
      new ContributionsRepository(),

    private readonly notifications =
      new NotificationsService(),

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
     * Determine user's role
     */
    const membership =
      await this.repository.getMemberRole(

        dto.groupId,

        currentUserId,

      );

    const autoApprove =

      membership.role === 'group_admin';

    /**
     * Record contribution
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

    /**
     * Notifications
     */
    if (autoApprove) {

      await this.notifications.createNotification(

        currentUserId,

        dto.groupId,

        'contribution_approved',

        'Contribution Recorded',

        'The contribution has been recorded successfully.',

      );

    } else {

      await this.notifications.createNotification(

        currentUserId,

        dto.groupId,

        'contribution_recorded',

        'Contribution Submitted',

        'Your contribution has been submitted for approval.',

      );

    }

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

    /**
     * Notify contributor
     */
    await this.notifications.createNotification(

      updated.member_id,

      updated.group_id,

      'contribution_approved',

      'Contribution Approved',

      'Your contribution has been approved.',

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

    /**
     * Notify contributor
     */
    await this.notifications.createNotification(

      updated.member_id,

      updated.group_id,

      'contribution_rejected',

      'Contribution Rejected',

      `Reason: ${reason}`,

    );

    return toContributionDto(
      updated,
    );

  }

}