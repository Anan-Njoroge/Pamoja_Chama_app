import { IconName } from "@/components/ui";

export interface StatCard {

    id: string;
  
    title: string;
  
    value: string;
  
    icon: IconName;
  
    color?: 'primary' | 'success' | 'warning' | 'danger';
  
  }
  
  export interface StatsGridProps {
  
    stats: StatCard[];
  
  }