/**
 * ============================================================================
 * Dashboard Section Constants
 * ============================================================================
 *
 * Demo data used by the Design System Dashboard showcase.
 *
 * NOTE
 * ----
 * These are NOT production data models.
 * They exist only to demonstrate how reusable dashboard components
 * appear when composed together.
 * ============================================================================
 */

import type {
  IconName,
} from '@/components/ui';

/**
 * Statistic card displayed on the dashboard.
 */
export interface DashboardStat {
  title: string;
  value: string;
  icon: IconName;
}

/**
 * Quick action button displayed below the statistics.
 */
export interface QuickAction {
  title: string;
  icon: IconName;
}

/**
 * Example statistics.
 */
export const DASHBOARD_STATS: DashboardStat[] = [
  {
    title: 'Total Savings',
    value: 'KES 125,000',
    icon: 'wallet',
  },

  {
    title: 'Active Loans',
    value: '12',
    icon: 'coins',
  },

  {
    title: 'Upcoming Meetings',
    value: '3',
    icon: 'calendar',
  },
];

/**
 * Example quick actions.
 */
export const QUICK_ACTIONS: QuickAction[] = [
  {
    title: 'Contribute',
    icon: 'plus',
  },

  {
    title: 'Request Loan',
    icon: 'receipt',
  },

  {
    title: 'View Ledger',
    icon: 'ledger',
  },
];