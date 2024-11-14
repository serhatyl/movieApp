import React, { useEffect, useState } from "react";
import { MovieService } from "../../services";
import { MovieModel } from "../../models";
import MovieItem from "../../components/MovieItem/MovieItem";
import { useLayout } from "../../hooks/useLayout";
import { useMovies } from "../../hooks/useMovies";

const MovieListPage = () => {
  const { setShowFavourites, setShowSearch } = useLayout();
  const { favourites, searchText } = useMovies();
  const [movies, setMovies] = useState<Array<MovieModel>>([]);
  const [filteredMovies, setFilteredMovies] = useState<Array<MovieModel>>([]);

  //NOTE - sadece favorileri filtreleme state'i
  const [showFavouritesOnly, setShowFavouritesOnly] = useState<boolean>(false);

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
    setShowFavourites(true);
    setShowSearch(true);
  }, []);

  useEffect(() => {
    let updatedMovies = [...movies];

    // Favorilere göre filtre
    if (showFavouritesOnly) {
      updatedMovies = [...favourites];
    }

    console.log("serarchch", searchText);
    if (searchText) {
      updatedMovies = updatedMovies.filter((movie) =>
        movie.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // IMDb puanına göre sıralama
    // if (sortByImdb) {
    //   updatedMovies.sort((a, b) => b.imdb - a.imdb); // Azalan IMDb puanı
    // } else {
    //   updatedMovies.sort((a, b) => a.imdb - b.imdb); // Artan IMDb puanı
    // }

    setFilteredMovies(updatedMovies); // Filtrelenmiş listeyi güncelle
  }, [movies, showFavouritesOnly, searchText, favourites]);
  // }, [movies, showFavouritesOnly, searchTerm, sortByImdb, favourites]);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Movies</h1>
          <div className="filter-wrapper">
            <div>Sırala</div>
            <div
              onClick={() => {
                setShowFavouritesOnly(true);
              }}
            >
              Filtrele
            </div>
          </div>
        </div>
      </div>

      <div className="grid-container">
        {/* {movies &&
          movies.length > 0 &&
          movies.map((movie) => <MovieItem key={movie.id} {...movie} />)} */}
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => <MovieItem key={movie.id} {...movie} />)
        ) : (
          <div className="col-12">
            <p>No movies available.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieListPage;
