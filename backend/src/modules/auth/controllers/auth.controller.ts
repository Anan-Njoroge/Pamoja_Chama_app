import {
  Request,
  Response,
} from "express";

import { AuthService } from "../services/auth.service";

import {
  activateSchema,
  loginSchema,
} from "../validators/auth.validator";

import { success } from "@/shared/utils/apiResponse";

export class AuthController {
  constructor(
    private readonly authService =
      new AuthService(),
  ) {}

  /**
   * ============================================================================
   * Activate Account
   * ============================================================================
   */
  activate = async (
    req: Request,
    res: Response,
  ) => {

    const dto =
      activateSchema.parse(
        req.body,
      );

    const result =
      await this.authService.activate(
        dto,
      );

    return success(
      res,
      result,
      result.message,
    );
  };

  /**
   * ============================================================================
   * Login
   * ============================================================================
   */
  login = async (
    req: Request,
    res: Response,
  ) => {

    const dto =
      loginSchema.parse(
        req.body,
      );

    const result =
      await this.authService.login(
        dto,
      );

    return success(
      res,
      result,
      "Login successful.",
    );
  };

  /**
   * ============================================================================
   * Logout
   * ============================================================================
   *
   * JWT authentication is stateless.
   * Logging out simply means deleting the token on the client.
   *
   * This endpoint exists so the frontend has a consistent API.
   *
   */
  logout = async (
    _req: Request,
    res: Response,
  ) => {

    return success(
      res,
      null,
      "Logged out successfully.",
    );

  };
}