export interface CreateContributionDto {

    groupId: string;
  
    contributionTypeId: string;
  
    paymentMethodId?: string;
  
    receiptNumber?: string;
  
    amount: number;
  
    paymentDate?: string;
  
    notes?: string;
  
  }
  
  export interface Contribution {

    id: string;
  
    group_id: string;
  
    member_id: string;
  
    contribution_type_id: string;
  
    payment_method_id: string | null;
  
    recorded_by: string;
  
    receipt_number: string | null;
  
    amount: number;
  
    payment_date: string;
  
    status: string;
  
    notes: string | null;
  
    verified_by: string | null;
  
    verified_at: string | null;
  
    rejection_reason: string | null;
  
    created_at: string;
  
    updated_at: string;
  
    deleted_at: string | null;
  
  }
  export interface RejectContributionDto {
  
    rejectionReason: string;
  
  }
  
  export interface ContributionResponseDto {
  
    id: string;
  
    groupId: string;
  
    memberId: string;
  
    contributionTypeId: string;
  
    paymentMethodId?: string | null;
  
    recordedBy: string;
  
    verifiedBy?: string | null;
  
    receiptNumber?: string | null;
  
    amount: number;
  
    paymentDate: string;
  
    status: string;
  
    notes?: string | null;
  
    rejectionReason?: string | null;
  
    createdAt: string;
  
  }