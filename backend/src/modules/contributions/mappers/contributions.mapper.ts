export const toContributionDto = (

    contribution: any,
  
  ) => ({
  
    id: contribution.id,
  
    amount: contribution.amount,
  
    contributionDate: contribution.contribution_date,
  
    paymentMethod: contribution.payment_method,
  
    notes: contribution.notes,
  
    createdAt: contribution.created_at,
  
  });