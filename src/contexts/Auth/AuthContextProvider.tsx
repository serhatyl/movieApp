import React, { createContext, useContext, useState } from "react";
import AuthContext from "./AuthContext";
import { AuthProps } from "./AuthProps";

interface Props {
  children: React.ReactNode;
}

const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const setIsAuthenticated = (isAuthenticated: boolean) => {
    setAuthProps((oldState) => ({
      ...oldState,
      isAuthenticated: isAuthenticated,
    }));
  };

  const [authProps, setAuthProps] = useState<AuthProps>({
    isAuthenticated: false,
    setIsAuthenticated,
  });

  return (
    <AuthContext.Provider value={authProps}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
