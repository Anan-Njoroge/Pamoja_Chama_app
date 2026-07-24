/**
 * ============================================================================
 * Notification DTO
 * ============================================================================
 */

export interface NotificationDto {

  id: string;

  userId: string;

  groupId: string | null;

  type: string;

  title: string;

  message: string;

  isRead: boolean;

  createdAt: string;

}

/**
 * ============================================================================
 * Create Notification DTO
 * ============================================================================
 */

export interface CreateNotificationDto {

  userId: string;

  groupId?: string;

  type: string;

  title: string;

  message: string;

}