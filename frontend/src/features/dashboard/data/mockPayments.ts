import type {
    Payment,
  } from '../components/RecentPayment/RecentPayment.types';
  
  export const MOCK_PAYMENTS: Payment[] = [
    {
      id: '1',
      memberName: 'John Kamau',
      amount: 'KSh 5,000',
      description: 'Monthly Contribution',
      date: 'Today',
    },
  
    {
      id: '2',
      memberName: 'Mary Wanjiku',
      amount: 'KSh 3,000',
      description: 'Savings Deposit',
      date: 'Today',
    },
  
    {
      id: '3',
      memberName: 'David Otieno',
      amount: 'KSh 5,000',
      description: 'Monthly Contribution',
      date: 'Yesterday',
    },
  
    {
      id: '4',
      memberName: 'Grace Njeri',
      amount: 'KSh 2,500',
      description: 'Loan Repayment',
      date: 'Yesterday',
    },
  
    {
      id: '5',
      memberName: 'Samuel Kiptoo',
      amount: 'KSh 5,000',
      description: 'Monthly Contribution',
      date: '2 days ago',
    },
  ];