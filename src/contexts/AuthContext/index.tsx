import React, { createContext, Context, useState } from 'react';

import { AuthContextProps } from './types';

export const AuthContext: Context<AuthContextProps> = createContext({
  handleLogin: () => {}
});

const AuthProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email: string) => {
    setLoading(true);
    setTimeout(() => {
      setIsAuthenticated(true);
      setLoading(false);
    }, 3000);
    return true;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
