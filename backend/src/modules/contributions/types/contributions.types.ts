export interface CreateContributionDto {

    groupId: string;
  
    contributionTypeId: string;
  
    paymentMethodId?: string;
  
    receiptNumber?: string;
  
    amount: number;
  
    paymentDate?: string;
  
    notes?: string;
  
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