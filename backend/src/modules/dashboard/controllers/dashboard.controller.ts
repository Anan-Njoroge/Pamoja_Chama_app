import { Request, Response } from "express";

import { AppError } from "@/shared/errors/AppError";
import { asyncHandler } from "@/shared/utils/asyncHandler";
import {
  success,
} from "@/shared/utils/apiResponse";

import { DashboardService } from "../services/dashboard.service";

const dashboardService =
  new DashboardService();

const getRouteParam = (

  value: string | string[] | undefined,

): string => {

  if (!value) {

    throw new AppError(

      "Missing route parameter.",

      400,

    );

  }

  return Array.isArray(value)

    ? value[0]

    : value;

};

/**
 * ============================================================================
 * Member Dashboard
 * ============================================================================
 */

export const getMemberDashboard =
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

      const dashboard =

        await dashboardService.getMemberDashboard(

          getRouteParam(

            req.params.groupId,

          ),

          req.user.id,

        );

      return success(

        res,

        dashboard,

      );

    },

  );

/**
 * ============================================================================
 * Treasurer Dashboard
 * ============================================================================
 */

export const getTreasurerDashboard =
  asyncHandler(

    async (

      req: Request,

      res: Response,

    ) => {

      const dashboard =

        await dashboardService.getTreasurerDashboard(

          getRouteParam(

            req.params.groupId,

          ),

        );

      return success(

        res,

        dashboard,

      );

    },

  );