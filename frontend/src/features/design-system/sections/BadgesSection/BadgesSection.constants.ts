import type { BadgeVariant } from '@/components/ui';

export interface BadgeExample {
  label: string;
  variant: BadgeVariant;
}

export const BADGE_EXAMPLES: BadgeExample[] = [
  {
    label: 'Active',
    variant: 'success',
  },

  {
    label: 'Pending',
    variant: 'pending',
  },

  {
    label: 'Rejected',
    variant: 'danger',
  },

  {
    label: 'Treasurer',
    variant: 'primary',
  },

  {
    label: 'Member',
    variant: 'neutral',
  },
];