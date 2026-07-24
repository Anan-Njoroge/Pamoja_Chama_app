import { Request, Response } from "express";

import { AppError } from "@/shared/errors/AppError";
import { asyncHandler } from "@/shared/utils/asyncHandler";
import {
  success,
  created,
} from "@/shared/utils/apiResponse";

import { MeetingsService } from "../services/meetings.service";

const meetingsService =
  new MeetingsService();

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

export const createMeeting =
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

      const meeting =

        await meetingsService.createMeeting(

          req.user.id,

          req.body,

        );

      return created(

        res,

        meeting,

        "Meeting created successfully.",

      );

    },

  );

export const updateMeeting =
  asyncHandler(

    async (

      req: Request,

      res: Response,

    ) => {

      const meeting =

        await meetingsService.updateMeeting(

          param(req.params.id),

          req.body,

        );

      return success(

        res,

        meeting,

      );

    },

  );

export const getMeeting =
  asyncHandler(

    async (

      req: Request,

      res: Response,

    ) => {

      const meeting =

        await meetingsService.getMeeting(

          param(req.params.id),

        );

      return success(

        res,

        meeting,

      );

    },

  );

export const getGroupMeetings =
  asyncHandler(

    async (

      req: Request,

      res: Response,

    ) => {

      const meetings =

        await meetingsService.getGroupMeetings(

          param(

            req.params.groupId,

          ),

        );

      return success(

        res,

        meetings,

      );

    },

  );

export const deleteMeeting =
  asyncHandler(

    async (

      req: Request,

      res: Response,

    ) => {

      const result =

        await meetingsService.deleteMeeting(

          param(req.params.id),

        );

      return success(

        res,

        result,

        result.message,

      );

    },

  );

  /**
 * ============================================================================
 * Attendance
 * ============================================================================
 */

export const recordAttendance =
  asyncHandler(

    async (

      req: Request,

      res: Response,

    ) => {

      const attendance =

        await meetingsService.recordAttendance(

          req.body,

        );

      return created(

        res,

        attendance,

        "Attendance recorded successfully.",

      );

    },

  );

export const updateAttendance =
  asyncHandler(

    async (

      req: Request,

      res: Response,

    ) => {

      const attendance =

        await meetingsService.updateAttendance(

          req.body,

        );

      return success(

        res,

        attendance,

      );

    },

  );

export const getAttendance =
  asyncHandler(

    async (

      req: Request,

      res: Response,

    ) => {

      const attendance =

        await meetingsService.getAttendance(

          param(req.params.id),

        );

      return success(

        res,

        attendance,

      );

    },

  );

/**
 * ============================================================================
 * Minutes
 * ============================================================================
 */

export const saveMinutes =
  asyncHandler(

    async (

      req: Request,

      res: Response,

    ) => {

      const meeting =

        await meetingsService.saveMinutes(

          param(req.params.id),

          req.body.minutes,

        );

      return success(

        res,

        meeting,

      );

    },

  );