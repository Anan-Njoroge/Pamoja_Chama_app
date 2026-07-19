export interface UseVerifyOtpReturn {

    code: string;
  
    setCode: (value: string) => void;
  
    loading: boolean;
  
    error: string | null;
  
    verifyOtp: () => Promise<void>;
  
  }