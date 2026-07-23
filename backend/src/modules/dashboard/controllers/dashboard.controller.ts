import {
    Request,
    Response,
  } from 'express';
  
  import { DashboardService } from '../services/dashboard.service';
  
  import { success } from '@/shared/utils/apiResponse';
  
  export class DashboardController {
  
    constructor(
  
      private readonly service =
        new DashboardService(),
  
    ) {}
  
    /**
     * ============================================================================
     * Member Dashboard
     * ============================================================================
     */
    getMemberDashboard = async (
  
      req: Request,
  
      res: Response,
  
    ) => {
  
      const groupId =
        String(req.query.groupId);
  
      const dashboard =
        await this.service.getMemberDashboard(
  
          req.user!.id,
  
          groupId,
  
        );
  
      return success(
  
        res,
  
        dashboard,
  
        'Dashboard loaded.',
  
      );
  
    };
  
    /**
     * ============================================================================
     * Treasurer Dashboard
     * ============================================================================
     */
    getTreasurerDashboard = async (
  
      req: Request,
  
      res: Response,
  
    ) => {
  
      const groupId =
        String(req.query.groupId);
  
      const dashboard =
        await this.service.getTreasurerDashboard(
  
          req.user!.id,
  
          groupId,
  
        );
  
      return success(
  
        res,
  
        dashboard,
  
        'Dashboard loaded.',
  
      );
  
    };
  
  }