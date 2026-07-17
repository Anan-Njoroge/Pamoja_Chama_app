/**
 * ============================================================================
 * useOtp Hook Types
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Defines the public API exposed by the useOtp hook.
 *
 * The OTP screen should only communicate with this interface.
 *
 * ============================================================================
 */

export interface UseOtpResult {

  /**
   * Current OTP entered by the user.
   */
  otp: string;

  /**
   * Updates the OTP value.
   */
  setOtp(
    value: string,
  ): void;

  /**
   * Indicates whether a verification request
   * is currently in progress.
   */
  loading: boolean;

  /**
   * Number of seconds before another OTP
   * can be requested.
   */
  secondsRemaining: number;

  /**
   * True when the user is allowed to
   * request another OTP.
   */
  canResend: boolean;

  /**
   * Verifies the entered OTP.
   */
  verify(): Promise<void>;

  /**
   * Requests another OTP.
   */
  resend(): Promise<void>;

}