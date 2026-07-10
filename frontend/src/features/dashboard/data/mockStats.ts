import type { StatCard } from '../components/StatsGrid/StatsGrid.types';

export const MOCK_STATS: StatCard[] = [
  {
    id: 'payments',
    title: 'Payments',
    value: '18',
    icon: 'payment',
    color: 'primary',
  },

  {
    id: 'members',
    title: 'Members',
    value: '25',
    icon: 'members',
    color: 'success',
  },

  {
    id: 'loans',
    title: 'Loans',
    value: '6',
    icon: 'loan',
    color: 'warning',
  },

  {
    id: 'savings',
    title: 'Savings',
    value: 'KSh 320K',
    icon: 'savings',
    color: 'primary',
  },
];