import React, { createContext, useContext, useState } from "react";
import AuthContext from "./AuthContext";

interface Props {
  children: React.ReactNode;
}

const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
