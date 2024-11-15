import React from 'react';
import {Outlet} from 'react-router-dom';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';
import '../styles/login.scss';

const LoginLayout = () => {
  return (
    <div className="login-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LoginLayout;
