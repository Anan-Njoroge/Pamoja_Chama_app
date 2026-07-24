import { Request, Response } from "express";

import { AppError } from "@/shared/errors/AppError";

import { asyncHandler } from "@/shared/utils/asyncHandler";

import {

  success,

} from "@/shared/utils/apiResponse";

import { NotificationsService } from "../services/notifications.service";

const notificationsService =
  new NotificationsService();

const param = (

  value: string | string[] | undefined,

): string => {

  if (!value) {

    throw new AppError(

      "Missing parameter.",

      400,

    );

  }

  return Array.isArray(value)

    ? value[0]

    : value;

};

export const getNotifications =
  asyncHandler(

    async (

      req: Request,

      res: Response,

    ) => {

      if (!req.user) {

        throw new AppError(

          "Unauthorized.",

          401,

        );

      }

      return success(

        res,

        await notificationsService.getUserNotifications(

          req.user.id,

        ),

      );

    },

  );

export const getUnreadNotifications =
  asyncHandler(

    async (

      req,

      res,

    ) => {

      if (!req.user) {

        throw new AppError(

          "Unauthorized.",

          401,

        );

      }

      return success(

        res,

        await notificationsService.getUnreadNotifications(

          req.user.id,

        ),

      );

    },

  );

export const markNotificationRead =
  asyncHandler(

    async (

      req,

      res,

    ) => {

      return success(

        res,

        await notificationsService.markAsRead(

          param(req.params.id),

        ),

      );

    },

  );

export const markAllNotificationsRead =
  asyncHandler(

    async (

      req,

      res,

    ) => {

      if (!req.user) {

        throw new AppError(

          "Unauthorized.",

          401,

        );

      }

      return success(

        res,

        await notificationsService.markAllAsRead(

          req.user.id,

        ),

      );

    },

  );

export const deleteNotification =
  asyncHandler(

    async (

      req,

      res,

    ) => {

      return success(

        res,

        await notificationsService.delete(

          param(req.params.id),

        ),

      );

    },

  );