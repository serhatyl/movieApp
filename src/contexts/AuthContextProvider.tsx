import React, { createContext, useContext, useState } from "react";
import AuthContext from "./AuthContext";
import { AuthProps } from "./AuthProps";

interface Props {
  children: React.ReactNode;
}

const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setIsAuthenticatedFn = (isAuthenticated: boolean) => {
    setIsAuthenticated(isAuthenticated);
    setAuthProps((oldState) => ({
      ...oldState,
      isAuthenticated: isAuthenticated,
    }));
  };

  const [authProps, setAuthProps] = useState<AuthProps>({
    isAuthenticated,
    setIsAuthenticated: setIsAuthenticatedFn,
  });

  return (
    <AuthContext.Provider value={authProps}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
