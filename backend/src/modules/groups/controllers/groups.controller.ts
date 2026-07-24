import {
  Request,
  Response,
} from 'express';

import { AppError } from '@/shared/errors/AppError';
import { asyncHandler } from '@/shared/utils/asyncHandler';

import { GroupsService } from '../services/groups.service';

import {
  createGroupSchema,
  inviteMemberSchema,
} from '../validators/groups.validator';

const groupsService =
  new GroupsService();

/**
 * ============================================================================
 * Route Parameter Helper
 * ============================================================================
 */
const getRouteParam = (

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

/**
 * ============================================================================
 * Create Group
 * ============================================================================
 */
export const createGroup = asyncHandler(

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

      await groupsService.createGroup(

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

/**
 * ============================================================================
 * Get My Groups
 * ============================================================================
 */
export const getGroups = asyncHandler(

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

      await groupsService.getGroups(

        user.id,

      );

    return res.status(200).json({

      success: true,

      data: groups,

    });

  },

);

/**
 * ============================================================================
 * Get Single Group
 * ============================================================================
 */
export const getGroup = asyncHandler(

  async (

    req: Request,

    res: Response,

  ) => {

    const groupId =

      getRouteParam(

        req.params.id,

      );

    const group =

      await groupsService.getGroup(

        groupId,

      );

    return res.status(200).json({

      success: true,

      data: group,

    });

  },

);

/**
 * ============================================================================
 * Add Member
 * ============================================================================
 *
 * Treasurer creates the member profile
 * and receives an activation code.
 */
export const inviteMember = asyncHandler(

  async (

    req: Request,

    res: Response,

  ) => {

    const dto =

      inviteMemberSchema.parse(

        req.body,

      );

    const groupId =

      getRouteParam(

        req.params.id,

      );

    const result =

      await groupsService.inviteMember(

        groupId,

        dto,

      );

    return res.status(201).json({

      success: true,

      message:
        'Member added successfully.',

      data: result,

    });

  },

);

/**
 * ============================================================================
 * Get Group Members
 * ============================================================================
 */
export const getMembers = asyncHandler(

  async (

    req: Request,

    res: Response,

  ) => {

    const groupId =

      getRouteParam(

        req.params.id,

      );

    const members =

      await groupsService.getMembers(

        groupId,

      );

    return res.status(200).json({

      success: true,

      data: members,

    });

  },

);