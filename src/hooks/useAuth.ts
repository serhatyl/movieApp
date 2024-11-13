import { useContext } from "react";
import { AuthProps } from "../contexts/AuthProps";
import AuthContext from "../contexts/AuthContext";

export const useAuth = () => {
  const context = useContext<AuthProps>(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
