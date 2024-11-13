import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <header>
        <h1>Movie App</h1>
        <nav>
          <a href="/home">Home</a>
          <a href="/movies">Movies</a>
          <a href="/profile">Profile</a>
        </nav>
      </header>

      <main>
        <Outlet /> {/* Sayfalar burada render edilecek */}
      </main>

      <footer>
        <p>© 2024 Movie App</p>
      </footer>
    </div>
  );
};

export default MainLayout;
