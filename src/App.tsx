import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import MovieListPage from "./pages/MoviesPage/MovieListPage";
import MovieDetailPage from "./pages/MoviesPage/MovieDetailPage";
import LoginLayout from "./layouts/LoginLayout";
import MainLayout from "./layouts/MainLayout";
import AuthChecker from "./components/AuthChecker";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginLayout />}>
          <Route index element={<LoginPage />} />
        </Route>

        {/* Main Layout (Login sonrası gösterilecek) */}
        <Route element={<AuthChecker />}>
          <Route path="/" element={<MainLayout />}>
            <Route path="home" element={<MovieListPage />} />
            <Route path="/movies/:id" element={<MovieDetailPage />} />{" "}
            {/* Filmler Sayfası */}
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
