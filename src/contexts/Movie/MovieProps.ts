import { MovieModel } from "../../models";

export interface MovieProps {
  favourites: Array<MovieModel>;
  searchText: string;
  removeFavourite: (movieId: string) => void;
  addFavourite: (movie: MovieModel) => void;
  setSearchText: (searchText: string) => void;
}
