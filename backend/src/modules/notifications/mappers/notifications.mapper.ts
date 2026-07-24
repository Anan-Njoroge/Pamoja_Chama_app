import { NotificationDto } from '../types/notifications.types';

export function toNotificationDto(
  notification: any,
): NotificationDto {

  return {

    id: notification.id,

    title: notification.title,

    message: notification.message,

    type: notification.type,

    isRead: notification.is_read,

    createdAt: notification.created_at,

  };

}