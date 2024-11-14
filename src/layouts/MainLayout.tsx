import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import "../styles/main.scss";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="main-layout">
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
