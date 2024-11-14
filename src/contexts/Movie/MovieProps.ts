import { MovieModel } from "../../models";

export interface MovieProps {
  favourites: Array<MovieModel>;
  removeFavourite: (movieId: string) => void;
  addFavourite: (movie: MovieModel) => void;
}
