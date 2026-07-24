import { Router } from "express";

import { authMiddleware } from "@/middleware/auth.middleware";

import {
  recordContribution,
  getContribution,
  getGroupContributions,
  verifyContribution,
  rejectContribution,
  deleteContribution,
  getMemberBalance,
  getFinancialSummary,
} from "../controllers/contributions.controller";

const router = Router();

/**
 * ============================================================================
 * Record Contribution
 * ============================================================================
 */

router.post(

  "/",

  authMiddleware,

  recordContribution,

);

/**
 * ============================================================================
 * Contribution Queries
 * ============================================================================
 */

router.get(

  "/:id",

  authMiddleware,

  getContribution,

);

router.get(

  "/group/:groupId",

  authMiddleware,

  getGroupContributions,

);

/**
 * ============================================================================
 * Verification
 * ============================================================================
 */

router.patch(

  "/:id/verify",

  authMiddleware,

  verifyContribution,

);

router.patch(

  "/:id/reject",

  authMiddleware,

  rejectContribution,

);

/**
 * ============================================================================
 * Delete
 * ============================================================================
 */

router.delete(

  "/:id",

  authMiddleware,

  deleteContribution,

);

/**
 * ============================================================================
 * Reports
 * ============================================================================
 */

router.get(

  "/group/:groupId/member/:memberId/balance",

  authMiddleware,

  getMemberBalance,

);

router.get(

  "/group/:groupId/summary",

  authMiddleware,

  getFinancialSummary,

);

export default router;