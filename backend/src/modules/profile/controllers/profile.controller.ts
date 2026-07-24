import { Request, Response } from "express";

import { AppError } from "@/shared/errors/AppError";
import { asyncHandler } from "@/shared/utils/asyncHandler";
import {
  success,
} from "@/shared/utils/apiResponse";

import { ProfileService } from "../services/profile.service";

const profileService =
  new ProfileService();

export const getProfile =
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

        await profileService.getProfile(

          req.user.id,

        ),

      );

    },

  );

export const updateProfile =
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

        await profileService.updateProfile(

          req.user.id,

          req.body,

        ),

      );

    },

  );