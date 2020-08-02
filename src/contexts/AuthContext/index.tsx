import React, {
  createContext,
  useState,
  Context,
  ChildContextProvider
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '~/services/api';

import { AuthContextProps } from './types';

export const AuthContext = createContext({
  loading: false,
  isAuthenticated: false,
  handleLogin: (email: string) => {}
});

const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email: string) => {
    try {
      setLoading(true);
      const { data } = await api.post('register', { email });
      AsyncStorage.setItem('@token', data.user.token);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      //
      // console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ loading, isAuthenticated, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
