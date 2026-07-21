import { BaseRepository } from '@/shared/database/BaseRepository';

import { CreateContributionDto } from '../types/contributions.types';

export class ContributionsRepository extends BaseRepository {

  /**
   * ============================================================================
   * Create Contribution
   * ============================================================================
   */
  async createContribution(

    memberId: string,

    recordedBy: string,

    dto: CreateContributionDto,

    status: string,

    verifiedBy?: string,

  ) {

    const { data, error } =
      await this.db
        .from('contributions')
        .insert({

          group_id: dto.groupId,

          member_id: memberId,

          contribution_type_id:
            dto.contributionTypeId,

          payment_method_id:
            dto.paymentMethodId ?? null,

          receipt_number:
            dto.receiptNumber ?? null,

          amount: dto.amount,

          payment_date:
            dto.paymentDate ?? new Date().toISOString(),

          notes:
            dto.notes ?? null,

          recorded_by:
            recordedBy,

          status,

          verified_by:
            verifiedBy ?? null,

          verified_at:
            verifiedBy
              ? new Date().toISOString()
              : null,

        })
        .select()
        .single();

    this.handleError(
      error,
      'Unable to record contribution.',
    );

    return this.ensureFound(data);

  }

  /**
   * ============================================================================
   * Get Contribution
   * ============================================================================
   */
  async findById(
    id: string,
  ) {

    const { data, error } =
      await this.db
        .from('contributions')
        .select('*')
        .eq('id', id)
        .is('deleted_at', null)
        .single();

    this.handleError(error);

    return this.ensureFound(
      data,
      'Contribution not found.',
    );

  }

  /**
   * ============================================================================
   * Member Contributions
   * ============================================================================
   */
  async findByMember(
    memberId: string,
  ) {

    const { data, error } =
      await this.db
        .from('contributions')
        .select('*')
        .eq('member_id', memberId)
        .is('deleted_at', null)
        .order(
          'payment_date',
          { ascending: false },
        );

    this.handleError(error);

    return data ?? [];

  }

  /**
   * ============================================================================
   * Pending Contributions
   * ============================================================================
   */
  async findPending(
    groupId: string,
  ) {

    const { data, error } =
      await this.db
        .from('contributions')
        .select('*')
        .eq('group_id', groupId)
        .eq('status', 'pending')
        .is('deleted_at', null)
        .order(
          'created_at',
          { ascending: true },
        );

    this.handleError(error);

    return data ?? [];

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

    const { data, error } =
      await this.db
        .from('contributions')
        .update({

          status: 'approved',

          verified_by: verifierId,

          verified_at:
            new Date().toISOString(),

          rejection_reason: null,

        })
        .eq('id', contributionId)
        .select()
        .single();

    this.handleError(
      error,
      'Unable to approve contribution.',
    );

    return this.ensureFound(data);

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

    const { data, error } =
      await this.db
        .from('contributions')
        .update({

          status: 'rejected',

          verified_by: verifierId,

          verified_at:
            new Date().toISOString(),

          rejection_reason:
            reason,

        })
        .eq('id', contributionId)
        .select()
        .single();

    this.handleError(
      error,
      'Unable to reject contribution.',
    );

    return this.ensureFound(data);

  }

  /**
   * ============================================================================
   * Check Duplicate Receipt
   * ============================================================================
   */
  async receiptExists(
    receiptNumber: string,
  ) {

    const { data, error } =
      await this.db
        .from('contributions')
        .select('id')
        .eq(
          'receipt_number',
          receiptNumber,
        )
        .maybeSingle();

    this.handleError(error);

    return !!data;

  }

  /**
 * ============================================================================
 * Get User Role In Group
 * ============================================================================
 */
async getMemberRole(

  groupId: string,

  userId: string,

) {

  const { data, error } =
    await this.db
      .from('group_members')
      .select('role')
      .eq('group_id', groupId)
      .eq('user_id', userId)
      .single();

  this.handleError(error);

  return this.ensureFound(
    data,
    'Membership not found.',
  );

}

}