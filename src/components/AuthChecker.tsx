import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthChecker = () => {
  const isAuthenticated = false; //TODO - Kullanıcının giriş yapıp yapmadığını kontrol et

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // NOTE - Kullanıcı giriş yaptıysa MainLayout ve alt routeları gösteriyoruz
  return <Outlet />;
};

export default AuthChecker;
