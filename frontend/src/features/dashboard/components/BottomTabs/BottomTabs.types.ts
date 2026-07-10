import type { IconName } from '@/components/ui';

export interface BottomTab {

  id: string;

  label: string;

  icon: IconName;

}

export interface BottomTabsProps {

  activeTab: string;

  onTabPress: (tabId: string) => void;

}