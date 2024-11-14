import React, { useEffect, useState } from "react";
import { MovieService } from "../../services";
import { MovieModel } from "../../models";
import MovieItem from "../../components/MovieItem/MovieItem";
import { useMovies } from "../../hooks/useMovies";
import MovieContext from "../../contexts/Movie/MovieContext";

const MovieListPage = () => {
  const [movies, setMovies] = useState<Array<MovieModel>>();

  const fetchMovies = () => {
    MovieService.fetchMovies()
      .then((movieResult) => {
        console.log("movie result = ", movieResult);
        setMovies(movieResult);
      })
      .catch(() => {
        alert("Movie fetch failed");
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="movies-container">
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => <MovieItem key={movie.id} {...movie} />)}
    </div>
  );
};

export default MovieListPage;
