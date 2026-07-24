import { Request, Response } from "express";

import { AppError } from "@/shared/errors/AppError";
import { asyncHandler } from "@/shared/utils/asyncHandler";
import {
  success,
  created,
} from "@/shared/utils/apiResponse";

import { ContributionsService } from "../services/contributions.service";

const contributionsService =
  new ContributionsService();

/**
 * ============================================================================
 * Helper
 * ============================================================================
 */

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
 * Record Contribution
 * ============================================================================
 */

export const recordContribution =
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

      const contribution =

        await contributionsService.recordContribution(

          req.user.id,

          req.body,

        );

      return created(

        res,

        contribution,

        "Contribution recorded successfully.",

      );

    },

  );

/**
 * ============================================================================
 * Get Contribution
 * ============================================================================
 */

export const getContribution =
  asyncHandler(

    async (

      req: Request,

      res: Response,

    ) => {

      const contribution =

        await contributionsService.getContribution(

          getRouteParam(

            req.params.id,

          ),

        );

      return success(

        res,

        contribution,

      );

    },

  );

/**
 * ============================================================================
 * Group Contributions
 * ============================================================================
 */

export const getGroupContributions =
  asyncHandler(

    async (

      req: Request,

      res: Response,

    ) => {

      const contributions =

        await contributionsService.getGroupContributions(

          getRouteParam(

            req.params.groupId,

          ),

        );

      return success(

        res,

        contributions,

      );

    },

  );
  /**
 * ============================================================================
 * Verify Contribution
 * ============================================================================
 */
export const verifyContribution =
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

      const result =

        await contributionsService.verifyContribution(

          getRouteParam(

            req.params.id,

          ),

          req.user.id,

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
 * Reject Contribution
 * ============================================================================
 */
export const rejectContribution =
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

      const result =

        await contributionsService.rejectContribution(

          getRouteParam(

            req.params.id,

          ),

          req.user.id,

          req.body.reason,

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
 * Delete Contribution
 * ============================================================================
 */
export const deleteContribution =
  asyncHandler(

    async (

      req: Request,

      res: Response,

    ) => {

      const result =

        await contributionsService.deleteContribution(

          getRouteParam(

            req.params.id,

          ),

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
 * Member Balance
 * ============================================================================
 */
export const getMemberBalance =
  asyncHandler(

    async (

      req: Request,

      res: Response,

    ) => {

      const result =

        await contributionsService.getMemberBalance(

          getRouteParam(

            req.params.groupId,

          ),

          getRouteParam(

            req.params.memberId,

          ),

        );

      return success(

        res,

        result,

      );

    },

  );

/**
 * ============================================================================
 * Group Financial Summary
 * ============================================================================
 */
export const getFinancialSummary =
  asyncHandler(

    async (

      req: Request,

      res: Response,

    ) => {

      const result =

        await contributionsService.getFinancialSummary(

          getRouteParam(

            req.params.groupId,

          ),

        );

      return success(

        res,

        result,

      );

    },

  );