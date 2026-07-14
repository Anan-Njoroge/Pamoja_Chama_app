import type {
    SurfaceVariant,
    IconName,
  } from '@/components/ui';
  
  export interface CardExample {
    title: string;
    subtitle: string;
    icon: IconName;
    variant: SurfaceVariant;
  }
  
  export const CARD_EXAMPLES: CardExample[] = [
    {
      title: 'Default Card',
      subtitle: 'Standard application card.',
      icon: 'wallet',
      variant: 'card',
    },
  
    {
      title: 'Glass Card',
      subtitle: 'Glassmorphism effect.',
      icon: 'group',
      variant: 'glass',
    },
  
    {
      title: 'Elevated Card',
      subtitle: 'Extra emphasis.',
      icon: 'coins',
      variant: 'elevated',
    },
  
    {
      title: 'Outlined Card',
      subtitle: 'Minimal surface.',
      icon: 'receipt',
      variant: 'outlined',
    },
  ];