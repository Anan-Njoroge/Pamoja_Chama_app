import type { IconName } from '@/components/ui';

export interface DemoAccountCardProps {
  title: string;

  phoneNumber: string;

  role: string;

  icon: IconName;

  onPress(phone: string): void;
}