import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const AuthChecker = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // NOTE - Kullanıcı giriş yaptıysa MainLayout ve alt routeları gösteriyoruz
  return <Outlet />;
};

export default AuthChecker;
