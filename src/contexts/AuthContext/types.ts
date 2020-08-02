export interface AuthContextProps {
  loading: boolean;
  isAuthenticated: boolean;
  handleLogin: (email: string) => Promise<void>;
}
