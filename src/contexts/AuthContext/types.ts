export interface AuthContextProps {
  token?: string;
  loading?: boolean;
  isAuthenticated?: boolean;
  handleLogin: (email: string) => void;
}
