import { Router } from "express";

import { authMiddleware } from "@/middleware/auth.middleware";

import {

  deleteNotification,
  getNotifications,
  getUnreadNotifications,
  markAllNotificationsRead,
  markNotificationRead,

} from "../controllers/notifications.controller";

const router = Router();

router.use(

  authMiddleware,

);

router.get(

  "/",

  getNotifications,

);

router.get(

  "/unread",

  getUnreadNotifications,

);

router.patch(

  "/:id/read",

  markNotificationRead,

);

router.patch(

  "/read-all",

  markAllNotificationsRead,

);

router.delete(

  "/:id",

  deleteNotification,

);

export default router;