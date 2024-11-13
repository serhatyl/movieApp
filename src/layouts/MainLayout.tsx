import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
