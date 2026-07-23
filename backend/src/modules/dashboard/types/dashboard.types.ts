/**
 * ============================================================================
 * Dashboard Statistics
 * ============================================================================
 */

export interface DashboardStats {

  totalContributions: number;

  monthlyContributions: number;

  pendingContributions: number;

  totalMeetings: number;

  upcomingMeetings: number;

  totalNotifications: number;

}

/**
 * ============================================================================
 * Treasurer Statistics
 * ============================================================================
 */

export interface TreasurerStats extends DashboardStats {

  totalMembers: number;

  activeMembers: number;

  totalCollected: number;

  pendingApprovals: number;

}

/**
 * ============================================================================
 * Recent Contribution
 * ============================================================================
 */

export interface RecentContribution {

  id: string;

  amount: number;

  paymentDate: string;

  status: string;

  contributionType: string;

}

/**
 * ============================================================================
 * Upcoming Meeting
 * ============================================================================
 */

export interface UpcomingMeeting {

  id: string;

  title: string;

  meetingDate: string;

  location?: string | null;

}

/**
 * ============================================================================
 * Dashboard Notification
 * ============================================================================
 */

export interface DashboardNotification {

  id: string;

  title: string;

  message: string;

  isRead: boolean;

  createdAt: string;

}

/**
 * ============================================================================
 * Member Dashboard Response
 * ============================================================================
 */

export interface MemberDashboard {

  stats: DashboardStats;

  upcomingMeeting: UpcomingMeeting | null;

  recentContributions: RecentContribution[];

  notifications: DashboardNotification[];

}

/**
 * ============================================================================
 * Treasurer Dashboard Response
 * ============================================================================
 */

export interface TreasurerDashboard {

  stats: TreasurerStats;

  upcomingMeeting: UpcomingMeeting | null;

  recentContributions: RecentContribution[];

  notifications: DashboardNotification[];

}