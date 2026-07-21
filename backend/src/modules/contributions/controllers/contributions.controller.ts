import {
    Request,
    Response,
  } from 'express';
  
  import { AppError } from '@/shared/errors/AppError';
  import { asyncHandler } from '@/shared/utils/asyncHandler';
  
  import { ContributionsService } from '../services/contributions.service';
  
  import {
    createContributionSchema,
    rejectContributionSchema,
  } from '../validators/contributions.validator';
  
  const contributionsService =
    new ContributionsService();
  
  /**
   * ============================================================================
   * Record Contribution
   * ============================================================================
   */
  export const createContribution = asyncHandler(
  
    async (
  
      req: Request,
  
      res: Response,
  
    ) => {
  
      const user = req.user;
  
      if (!user) {
  
        throw new AppError(
          'Unauthorized.',
          401,
        );
  
      }
  
      const dto =
        createContributionSchema.parse(
          req.body,
        );
  
      /**
       * NOTE:
       * The user's group role (member/group_admin)
       * will be determined in the service layer
       * from the group_members table.
       */
      const contribution =
        await contributionsService.createContribution(
  
          user.id,
  
          dto,
  
        );
  
      return res.status(201).json({
  
        success: true,
  
        message:
          'Contribution recorded successfully.',
  
        data: contribution,
  
      });
  
    },
  
  );
  
  /**
   * ============================================================================
   * My Contributions
   * ============================================================================
   */
  export const getMyContributions = asyncHandler(
  
    async (
  
      req: Request,
  
      res: Response,
  
    ) => {
  
      const user = req.user;
  
      if (!user) {
  
        throw new AppError(
          'Unauthorized.',
          401,
        );
  
      }
  
      const contributions =
        await contributionsService.getMyContributions(
          user.id,
        );
  
      return res.status(200).json({
  
        success: true,
  
        data: contributions,
  
      });
  
    },
  
  );
  
  /**
   * ============================================================================
   * Pending Contributions
   * ============================================================================
   */
  export const getPendingContributions = asyncHandler(
  
    async (
  
      req: Request,
  
      res: Response,
  
    ) => {
  
      const rawGroupId =
        req.query.groupId;
  
      const groupId =
        typeof rawGroupId === 'string'
          ? rawGroupId
          : undefined;
  
      if (!groupId) {
  
        throw new AppError(
          'groupId is required.',
          400,
        );
  
      }
  
      const contributions =
        await contributionsService.getPendingContributions(
          groupId,
        );
  
      return res.status(200).json({
  
        success: true,
  
        data: contributions,
  
      });
  
    },
  
  );
  
  /**
   * ============================================================================
   * Approve Contribution
   * ============================================================================
   */
  export const approveContribution = asyncHandler(
  
    async (
  
      req: Request,
  
      res: Response,
  
    ) => {
  
      const user = req.user;
  
      if (!user) {
  
        throw new AppError(
          'Unauthorized.',
          401,
        );
  
      }
  
      const contributionId =
        Array.isArray(req.params.id)
          ? req.params.id[0]
          : req.params.id;
  
      const contribution =
        await contributionsService.approveContribution(
  
          contributionId,
  
          user.id,
  
        );
  
      return res.status(200).json({
  
        success: true,
  
        message:
          'Contribution approved.',
  
        data: contribution,
  
      });
  
    },
  
  );
  
  /**
   * ============================================================================
   * Reject Contribution
   * ============================================================================
   */
  export const rejectContribution = asyncHandler(
  
    async (
  
      req: Request,
  
      res: Response,
  
    ) => {
  
      const user = req.user;
  
      if (!user) {
  
        throw new AppError(
          'Unauthorized.',
          401,
        );
  
      }
  
      const dto =
        rejectContributionSchema.parse(
          req.body,
        );
  
      const contributionId =
        Array.isArray(req.params.id)
          ? req.params.id[0]
          : req.params.id;
  
      const contribution =
        await contributionsService.rejectContribution(
  
          contributionId,
  
          user.id,
  
          dto.rejectionReason,
  
        );
  
      return res.status(200).json({
  
        success: true,
  
        message:
          'Contribution rejected.',
  
        data: contribution,
  
      });
  
    },
  
  );