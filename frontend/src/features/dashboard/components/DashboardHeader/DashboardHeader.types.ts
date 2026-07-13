export interface DashboardHeaderProps {
  greeting: string;

  userName: string;

  chamaName: string;

  notificationCount?: number;

  showNotifications?: boolean;

  showProfile?: boolean;

  glass?: boolean;

  onNotificationPress?: () => void;

  onProfilePress?: () => void;
}