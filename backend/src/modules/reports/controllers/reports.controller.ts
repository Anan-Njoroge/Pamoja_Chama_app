import { Request, Response } from 'express';

import { asyncHandler } from '@/shared/utils/asyncHandler';

import { ReportsService } from '../services/reports.service';

import { buildContributionReport } from '../templates/contribution-report';

import { buildMembersReport } from '../templates/members-report';

import { buildFinancialSummary } from '../templates/financial-summary';

const reports = new ReportsService();

export class ReportsController {

  static contributionReport = asyncHandler(

    async (

      req: Request,

      res: Response,

    ) => {

        const groupId =

        Array.isArray(req.params.groupId)
      
          ? req.params.groupId[0]
      
          : req.params.groupId;

      const group =

        await reports.getGroupHeader(

          groupId,

        );

      const contributions =

        await reports.getContributionReport(

          groupId,

        );

      const pdf =

        buildContributionReport(

          group,

          contributions,

        );

      res.setHeader(

        'Content-Type',

        'application/pdf',

      );

      res.setHeader(

        'Content-Disposition',

        'attachment; filename=ContributionReport.pdf',

      );

      pdf.pipe(res);

    },

  );

  static membersReport = asyncHandler(

    async (

      req: Request,

      res: Response,

    ) => {

        const groupId =

        Array.isArray(req.params.groupId)
      
          ? req.params.groupId[0]
      
          : req.params.groupId;

      const group =

        await reports.getGroupHeader(

          groupId,

        );

      const members =

        await reports.getMembersReport(

          groupId,

        );

      const pdf =

        buildMembersReport(

          group,

          members,

        );

      res.setHeader(

        'Content-Type',

        'application/pdf',

      );

      res.setHeader(

        'Content-Disposition',

        'attachment; filename=MembersReport.pdf',

      );

      pdf.pipe(res);

    },

  );

  static financialSummary = asyncHandler(

    async (

      req: Request,

      res: Response,

    ) => {

        const groupId =

        Array.isArray(req.params.groupId)
      
          ? req.params.groupId[0]
      
          : req.params.groupId;

      const group =

        await reports.getGroupHeader(

          groupId,

        );

      const summary =

        await reports.getFinancialSummary(

          groupId,

        );

      const pdf =

        buildFinancialSummary(

          group,

          summary,

        );

      res.setHeader(

        'Content-Type',

        'application/pdf',

      );

      res.setHeader(

        'Content-Disposition',

        'attachment; filename=FinancialSummary.pdf',

      );

      pdf.pipe(res);

    },

  );

}