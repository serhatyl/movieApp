import { useContext } from "react";
import { AuthProps } from "../contexts/Auth/AuthProps";
import AuthContext from "../contexts/Auth/AuthContext";

export const useAuth = () => {
  const context = useContext<AuthProps>(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
