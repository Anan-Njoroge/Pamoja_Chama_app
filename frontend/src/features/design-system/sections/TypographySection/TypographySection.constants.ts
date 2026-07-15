import type { TextVariant } from '@/components/ui';

export interface TypographyExample {

  id: string;

  label: string;

  variant: TextVariant;

  sample: string;

}

export const TYPOGRAPHY_EXAMPLES: TypographyExample[] = [

  {
    id: 'display',
    label: 'Display',
    variant: 'display',
    sample: 'Pamoja Chama',
  },

  {
    id: 'h1',
    label: 'Heading 1',
    variant: 'h1',
    sample: 'Dashboard',
  },

  {
    id: 'h2',
    label: 'Heading 2',
    variant: 'h2',
    sample: 'Monthly Contribution',
  },

  {
    id: 'h3',
    label: 'Heading 3',
    variant: 'h3',
    sample: 'Recent Payments',
  },

  {
    id: 'body',
    label: 'Body',
    variant: 'body',
    sample:
      'The quick brown fox jumps over the lazy dog.',
  },

  {
    id: 'small',
    label: 'Small',
    variant: 'small',
    sample:
      'Supporting information.',
  },

  {
    id: 'caption',
    label: 'Caption',
    variant: 'caption',
    sample:
      'Last updated today.',
  },

  {
    id: 'button',
    label: 'Button',
    variant: 'button',
    sample:
      'Record Payment',
  },

];