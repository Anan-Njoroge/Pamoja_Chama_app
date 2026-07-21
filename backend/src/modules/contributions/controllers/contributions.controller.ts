import {
    Request,
    Response,
  } from 'express';
  
  import { AppError } from '@/shared/errors/AppError';
  import { asyncHandler } from '@/shared/utils/asyncHandler';
  
  import { ContributionsService } from '../services/contributions.service';
  import { createContributionSchema } from '../validators/contributions.validator';
  
  const contributionsService =
    new ContributionsService();
  
  const getParam = (
    value: string | string[] | undefined,
  ): string => {
  
    if (!value) {
  
      throw new AppError(
        'Missing route parameter.',
        400,
      );
  
    }
  
    return Array.isArray(value)
      ? value[0]
      : value;
  
  };
  
  export const recordContribution = asyncHandler(
  
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
  
      const contribution =
        await contributionsService.createContribution(
  
          user.id,
  
          dto,
  
        );
  
      return res.status(201).json({
  
        success: true,
  
        message: 'Contribution recorded successfully.',
  
        data: contribution,
  
      });
  
    },
  
  );
  
  export const getGroupContributions = asyncHandler(
  
    async (
  
      req: Request,
  
      res: Response,
  
    ) => {
  
      const groupId =
        getParam(req.params.groupId);
  
      const contributions =
        await contributionsService.getGroupContributions(
          groupId,
        );
  
      return res.json({
  
        success: true,
  
        data: contributions,
  
      });
  
    },
  
  );
  
  export const getMemberContributions = asyncHandler(
  
    async (
  
      req: Request,
  
      res: Response,
  
    ) => {
  
      const memberId =
        getParam(req.params.memberId);
  
      const contributions =
        await contributionsService.getMemberContributions(
          memberId,
        );
  
      return res.json({
  
        success: true,
  
        data: contributions,
  
      });
  
    },
  
  );