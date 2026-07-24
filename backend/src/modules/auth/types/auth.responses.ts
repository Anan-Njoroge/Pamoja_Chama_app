import {
    AuthResponseDto,
  } from "./auth.types";
  
  /**
   * ============================================================================
   * Standard Authentication Response
   * ============================================================================
   */
  export interface AuthResponse {
  
    success: boolean;
  
    message: string;
  
    data: AuthResponseDto;
  
  }