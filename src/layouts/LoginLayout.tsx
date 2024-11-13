import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/ui/Footer";
import LoginHeader from "../components/ui/LoginHeader";
import "../styles/login.scss"

const LoginLayout = () => {
  return (
    <div className="login-layout">
      <LoginHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LoginLayout;
