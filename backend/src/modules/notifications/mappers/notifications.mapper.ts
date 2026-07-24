import { NotificationDto } from "../types/notifications.types";

/**
 * ============================================================================
 * Notification Mapper
 * ============================================================================
 */

export function toNotificationDto(

  notification: any,

): NotificationDto {

  return {

    id: notification.id,

    userId: notification.user_id,

    groupId: notification.group_id,

    type: notification.type,

    title: notification.title,

    message: notification.message,

    isRead: notification.is_read,

    createdAt: notification.created_at,

  };

}