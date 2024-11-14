import { MovieModel } from "../models";
import fetchHelper from "../utils/fetchHelper";

const fetchMovies = async () => {
  try {
    const data = await fetchHelper("/movies");
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    alert(error);
  }
};

const getMovieDetailById = async (
  movieId: string
): Promise<MovieModel | undefined> => {
  try {
    const data = await fetchHelper(`/movies/${movieId}`);
    return data;
  } catch (error) {
    console.error("Error ocurred on getMovieDetailById:", error);
    alert(error);
  }
};

export { fetchMovies, getMovieDetailById };
