import { ContributionDto } from "../types/contributions.types";

/**
 * ============================================================================
 * Database Row
 * ============================================================================
 */

interface ContributionRow {

  id: string;

  group_id: string;

  member_id: string;

  contribution_type_id: string;

  payment_method_id: string;

  amount: number;

  payment_date: string;

  receipt_number: string | null;

  notes: string | null;

  recorded_by: string;

  created_at: string;

}

/**
 * ============================================================================
 * Database → DTO
 * ============================================================================
 */

export function toContributionDto(

  contribution: ContributionRow,

): ContributionDto {

  return {

    id: contribution.id,

    groupId: contribution.group_id,

    memberId: contribution.member_id,

    contributionTypeId:
      contribution.contribution_type_id,

    paymentMethodId:
      contribution.payment_method_id,

    amount: contribution.amount,

    paymentDate:
      contribution.payment_date,

    receiptNumber:
      contribution.receipt_number,

    notes:
      contribution.notes,

    recordedBy:
      contribution.recorded_by,

    createdAt:
      contribution.created_at,

  };

}

/**
 * ============================================================================
 * Database[] → DTO[]
 * ============================================================================
 */

export function toContributionDtos(

  rows: ContributionRow[],

): ContributionDto[] {

  return rows.map(

    toContributionDto,

  );

}