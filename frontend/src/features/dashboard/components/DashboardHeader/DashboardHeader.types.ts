export interface DashboardHeaderProps {
  greeting: string;
  userName: string;
  chamaName: string;

  notificationCount?: number;

  onNotificationPress?: () => void;

  onProfilePress?: () => void;
}