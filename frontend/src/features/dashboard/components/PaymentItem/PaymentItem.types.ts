import type { IconName } from '@/components/ui';

export interface PaymentItemProps {

  memberName: string;

  amount: string;

  description: string;

  date: string;

  icon?: IconName;

}