import {
    Request,
    Response,
  } from 'express';
  
  import { AppError } from '@/shared/errors/AppError';
  import { asyncHandler } from '@/shared/utils/asyncHandler';
  
  import { GroupsService } from '../services/groups.service';
  import { createGroupSchema } from '../validators/groups.validator';
  
  export class GroupsController {
  
    private readonly service =
      new GroupsService();
  
    createGroup = asyncHandler(
  
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
          createGroupSchema.parse(
            req.body,
          );
  
        const group =
          await this.service.createGroup(
            user.id,
            dto,
          );
  
        return res.status(201).json({
  
          success: true,
  
          message:
            'Group created successfully.',
  
          data: group,
  
        });
  
      },
  
    );
  
    getGroups = asyncHandler(
  
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
  
        const groups =
          await this.service.getGroups(
            user.id,
          );
  
        return res.status(200).json({
  
          success: true,
  
          data: groups,
  
        });
  
      },
  
    );
  
    getGroup = asyncHandler<{ id: string }>(

        async (
      
          req,
      
          res,
      
        ) => {
      
          const group =
            await this.service.getGroup(
              req.params.id,
            );
      
          return res.status(200).json({
      
            success: true,
      
            data: group,
      
          });
      
        },
      
      );
  
  }