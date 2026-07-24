/**
 * ============================================================================
 * Create Contribution DTO
 * ============================================================================
 *
 * Used when the Treasurer records a member contribution.
 */

export interface CreateContributionDto {

  groupId: string;

  memberId: string;

  contributionTypeId: string;

  paymentMethodId: string;

  amount: number;

  paymentDate?: string;

  receiptNumber?: string;

  notes?: string;

}

/**
 * ============================================================================
 * Update Contribution DTO
 * ============================================================================
 */

export interface UpdateContributionDto {

  contributionTypeId?: string;

  paymentMethodId?: string;

  amount?: number;

  paymentDate?: string;

  receiptNumber?: string;

  notes?: string;

}

/**
 * ============================================================================
 * Contribution DTO
 * ============================================================================
 */

export interface ContributionDto {

  id: string;

  groupId: string;

  memberId: string;

  contributionTypeId: string;

  paymentMethodId: string;

  amount: number;

  paymentDate: string;

  receiptNumber: string | null;

  notes: string | null;

  recordedBy: string;

  createdAt: string;

}

/**
 * ============================================================================
 * Contribution Summary DTO
 * ============================================================================
 */

export interface ContributionSummaryDto {

  totalAmount: number;

  totalRecords: number;

}

/**
 * ============================================================================
 * Member Balance DTO
 * ============================================================================
 */

export interface MemberBalanceDto {

  memberId: string;

  totalContributed: number;

}