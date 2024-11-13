import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/Login/LoginPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import MovieListPage from "./pages/Movies/MovieListPage.tsx";
import MovieDetailPage from "./pages/Movies/MovieDetailPage";
import LoginLayout from "./layouts/LoginLayout";
import MainLayout from "./layouts/MainLayout";
import AuthChecker from "./components/AuthChecker";
import AuthContextProvider from "./contexts/AuthContextProvider";

const App: React.FC = () => {
  console.log("**");

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginLayout />}>
            <Route index element={<LoginPage />} />
          </Route>

          {/* Main Layout (Login sonrası gösterilecek) */}
          <Route element={<AuthChecker />}>
            <Route path="/" element={<MainLayout />}>
              <Route path="home" element={<MovieListPage />} />
              <Route path="/movies/:id" element={<MovieDetailPage />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
