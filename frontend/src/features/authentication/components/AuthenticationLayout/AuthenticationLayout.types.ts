/**
 * ============================================================================
 * Authentication Layout Types
 * ============================================================================
 *
 * This layout is shared by every authentication screen.
 *
 * Examples:
 *
 * - Login
 * - OTP Verification
 * - Forgot Password
 * - Reset Password
 *
 * The layout owns the page structure while each screen supplies
 * its own content through children.
 *
 * ============================================================================
 */

import React from 'react';

export interface AuthenticationLayoutProps {
  /**
   * Large heading displayed below the logo.
   */
  title: string;

  /**
   * Supporting description displayed below the title.
   */
  subtitle: string;

  /**
   * Screen-specific content.
   */
  children: React.ReactNode;
}