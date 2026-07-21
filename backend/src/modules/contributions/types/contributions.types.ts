export interface CreateContributionDto {

    groupId: string;
  
    memberId: string;
  
    amount: number;
  
    contributionDate: string;
  
    paymentMethod: string;
  
    notes?: string;
  
  }