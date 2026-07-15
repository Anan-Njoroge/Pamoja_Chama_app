import type {
    IconName,
  } from '@/components/ui';
  
  export interface IconCategory {
    title: string;
    icons: IconName[];
  }
  
  export const ICON_CATEGORIES: IconCategory[] = [
    {
      title: 'Navigation',
      icons: [
        'home',
        'group',
        'history',
        'profile',
        'settings',
      ],
    },
  
    {
      title: 'Finance',
      icons: [
        'wallet',
        'coins',
        'receipt',
        'ledger',
        'credit-card',
      ],
    },
  
    {
      title: 'Actions',
      icons: [
        'plus',
        'search',
        'calendar',
        'notification',
      ],
    },
  
    {
      title: 'Authentication',
      icons: [
        'phone',
        'lock',
        'eye',
        'eye-off',
      ],
    },
  ];