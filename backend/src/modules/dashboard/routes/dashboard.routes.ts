import { Router } from "express";

import { authMiddleware } from "@/middleware/auth.middleware";

import {
  getMemberDashboard,
  getTreasurerDashboard,
} from "../controllers/dashboard.controller";

const router = Router();

/**
 * ============================================================================
 * Member Dashboard
 * ============================================================================
 */

router.get(

  "/member/:groupId",

  authMiddleware,

  getMemberDashboard,

);

/**
 * ============================================================================
 * Treasurer Dashboard
 * ============================================================================
 */

router.get(

  "/treasurer/:groupId",

  authMiddleware,

  getTreasurerDashboard,

);

export default router;