import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/Login/LoginPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import MovieListPage from "./pages/Movies/MovieListPage.tsx";
import MovieDetailPage from "./pages/Movies/MovieDetailPage";
import LoginLayout from "./layouts/LoginLayout";
import MainLayout from "./layouts/MainLayout";
import AuthChecker from "./components/AuthChecker";
import AuthContextProvider from "./contexts/Auth/AuthContextProvider";
import MovieContextProvider from "./contexts/Movie/MovieContextProvider";
import LayoutContextProvider from "./contexts/Layout/LayoutContextProvider";

const App: React.FC = () => {
  return (
    <LayoutContextProvider>
      <AuthContextProvider>
        <MovieContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginLayout />}>
                <Route index element={<LoginPage />} />
              </Route>
              {/* Main Layout (Login sonrası gösterilecek) */}
              {/* TODO - open authchecker */}
              {/* <Route element={<AuthChecker />}> */}
              <Route path="/" element={<MainLayout />}>
                <Route path="movies" element={<MovieListPage />} />
                <Route path="movies/:id" element={<MovieDetailPage />} />
              </Route>
              {/* </Route> */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </MovieContextProvider>
      </AuthContextProvider>
    </LayoutContextProvider>
  );
};

export default App;
