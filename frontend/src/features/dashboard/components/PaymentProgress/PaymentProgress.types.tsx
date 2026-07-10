import type { ViewComponentProps } from '@/types';

export interface PaymentProgressProps extends ViewComponentProps {
  title: string;

  amount: number;

  target: number;

  membersPaid: number;

  totalMembers: number;

  onRecordPayment: () => void;
}