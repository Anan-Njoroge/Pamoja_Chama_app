import { ContributionResponseDto } from '../types/contributions.types';

export const toContributionDto = (

  contribution: any,

): ContributionResponseDto => ({

  id: contribution.id,

  groupId: contribution.group_id,

  memberId: contribution.member_id,

  contributionTypeId:

    contribution.contribution_type_id,

  paymentMethodId:

    contribution.payment_method_id,

  recordedBy:

    contribution.recorded_by,

  verifiedBy:

    contribution.verified_by,

  receiptNumber:

    contribution.receipt_number,

  amount: Number(contribution.amount),

  paymentDate:

    contribution.payment_date,

  status:

    contribution.status,

  notes:

    contribution.notes,

  rejectionReason:

    contribution.rejection_reason,

  createdAt:

    contribution.created_at,

});