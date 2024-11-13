import React, { useEffect } from "react";
import { MovieService } from "../../services";

const MovieListPage = () => {
  const fetchMovies = () => {
    console.log("fetchMovies triggered");
    MovieService.fetchMovies()
      .then((movieResult) => {
        console.log("movie result = ", movieResult);
      })
      .catch(() => {
        alert("Movie fetch failed");
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return <div>MovieListPage</div>;
};

export default MovieListPage;
