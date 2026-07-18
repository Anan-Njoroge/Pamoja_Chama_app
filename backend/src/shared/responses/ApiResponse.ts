/**
 * ============================================================================
 * API Response
 * ============================================================================
 *
 * Standard response returned by every endpoint.
 *
 * ============================================================================
 */

export class ApiResponse<T> {
  constructor(
    public success: boolean,
    public message: string,
    public data?: T,
  ) {}

  static success<T>(
    message: string,
    data?: T,
  ) {
    return new ApiResponse(
      true,
      message,
      data,
    );
  }

  static failure(
    message: string,
  ) {
    return new ApiResponse(
      false,
      message,
    );
  }
}