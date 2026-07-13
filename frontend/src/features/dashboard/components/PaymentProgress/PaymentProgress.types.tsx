export interface PaymentProgressProps {
  title: string;

  amount: number;

  target: number;

  membersPaid: number;

  totalMembers: number;

  onRecordPayment?: () => void;
}