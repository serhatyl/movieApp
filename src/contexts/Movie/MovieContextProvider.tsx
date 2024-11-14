import React, { createContext, useContext, useState } from "react";
import MovieContext from "./MovieContext";
import { MovieProps } from "./MovieProps";
import { MovieModel } from "../../models";

interface Props {
  children: React.ReactNode;
}

const MovieContextProvider: React.FC<Props> = ({ children }) => {
  const addFavourite = (movie: MovieModel) => {
    setMovieProps((oldState: MovieProps) => {
      const isAlreadyFavourite = oldState.favourites.some(
        (existingMovie) => existingMovie.id === movie.id
      );

      if (isAlreadyFavourite) {
        return oldState;
      }

      return {
        ...oldState,
        favourites: [...oldState.favourites, movie],
      };
    });
  };

  const removeFavourite = (movieId: string) => {
    setMovieProps((oldState: MovieProps) => ({
      ...oldState,
      favourites: oldState.favourites.filter(
        (movie: MovieModel) => movie.id !== movieId
      ),
    }));
  };

  const setSearchText = (searchText: string) => {
    setMovieProps((oldState: MovieProps) => ({
      ...oldState,
      searchText,
    }));
  };

  const [movieProps, setMovieProps] = useState<MovieProps>({
    favourites: [],
    searchText: "",
    removeFavourite,
    addFavourite,
    setSearchText,
  });

  return (
    <MovieContext.Provider value={movieProps}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;
