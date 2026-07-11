export interface Payment {

    id: string;
  
    memberName: string;
  
    amount: string;
  
    description: string;
  
    date: string;
  
  }
  
  export interface RecentPaymentProps {
  
    payments: Payment[];
  
  }