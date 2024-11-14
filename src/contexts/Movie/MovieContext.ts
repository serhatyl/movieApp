import { createContext } from "react";
import { MovieProps } from "./MovieProps";

const DefaultMovieProps: MovieProps = {} as MovieProps;

const MovieContext = createContext<MovieProps>(DefaultMovieProps);

export default MovieContext;
