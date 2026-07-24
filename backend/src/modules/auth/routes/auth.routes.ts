import { Router } from "express";

import { AuthController } from "../controllers/auth.controller";

import { authMiddleware } from "@/middleware/auth.middleware";

const router = Router();

const controller =
    new AuthController();

/**
 * ============================================================================
 * Public
 * ============================================================================
 */

router.post(
    "/activate",
    controller.activate,
);

router.post(
    "/login",
    controller.login,
);

/**
 * ============================================================================
 * Protected
 * ============================================================================
 */

router.post(
    "/logout",
    authMiddleware,
    controller.logout,
);

export default router;