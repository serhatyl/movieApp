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

export { fetchMovies };
