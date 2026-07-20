export interface UseLoginReturn {

  email: string;

  setEmail: (value: string) => void;

  loading: boolean;

  error: string | null;

  continueLogin: () => Promise<void>;

}