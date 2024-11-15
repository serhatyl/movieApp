import React, {useEffect, useMemo, useState} from 'react';
import {MovieService} from '../../services';
import {MovieModel} from '../../models';
import MovieItem from '../../components/MovieItem/MovieItem';
import {useLayout} from '../../hooks/useLayout';
import {useMovies} from '../../hooks/useMovies';
import Dropdown from '../../components/ui/Dropdown/Dropdown';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowDownAZ, faFilter} from '@fortawesome/free-solid-svg-icons';
import {SortTypes} from '../../models/abstraction';

const MovieListPage = () => {
  const {setShowFavourites, setShowSearch, toggleLoader} = useLayout();
  const {favourites, searchText} = useMovies();

  const [movies, setMovies] = useState<Array<MovieModel>>([]);

  // Search, favourites, sort states & variables
  const [showFavouritesOnly, setShowFavouritesOnly] = useState<boolean>(false);
  const [sortField, setSortField] = useState<SortTypes>();
  const sortOptions = [
    {label: 'Film Adı', value: SortTypes.Name},
    {label: 'Yayın Yılı', value: SortTypes.ReleaseYear},
    {label: 'IMDb Puanı', value: SortTypes.ImdbScore},
  ];

  const fetchMovies = () => {
    toggleLoader(true);
    MovieService.fetchMovies()
      .then((movieResult) => {
        setMovies(movieResult);
      })
      .catch(() => {
        alert('Movie fetch failed');
      })
      .finally(() => {
        toggleLoader(false);
      });
  };

  useEffect(() => {
    fetchMovies();
    setShowFavourites(true);
    setShowSearch(true);
  }, []);

  const filteredMovies = useMemo(() => {
    if (movies && movies.length > 0) {
      let updatedMovies = [...movies];

      //NOTE - Favorilere göre filtre
      if (showFavouritesOnly) {
        updatedMovies = [...favourites];
      }

      //NOTE - Sıralama
      if (sortField) {
        updatedMovies.sort((a, b) => {
          if (sortField === SortTypes.Name) return a.name.localeCompare(b.name);
          if (sortField === SortTypes.ReleaseYear) return a.year - b.year;
          if (sortField === SortTypes.ImdbScore) return Number(b.imdb) - Number(a.imdb);
          return 0;
        });
      }

      //NOTE - Arama
      if (searchText) {
        updatedMovies = updatedMovies.filter((movie) =>
          movie.name.toLowerCase().includes(searchText.toLowerCase()),
        );
      }

      return updatedMovies;
    }
    return [];
  }, [movies, showFavouritesOnly, searchText, favourites, sortField]);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Movies</h1>
          {/* NOTE - Dropdown componenti aynı zamanda useNativeComponent propsunu alıyor
              böylece istenirse native select componenti de kullanılabilir
          */}
          <div className="filter-wrapper">
            <Dropdown
              labelContent={
                <div>
                  Sırala
                  <FontAwesomeIcon icon={faArrowDownAZ} />
                </div>
              }
            >
              {sortOptions.map((option) => (
                <div key={option.value} onClick={() => setSortField(option.value)}>
                  {option.label}
                </div>
              ))}
            </Dropdown>
            <Dropdown
              labelContent={
                <div>
                  Filtre
                  <FontAwesomeIcon icon={faFilter} />
                </div>
              }
            >
              <div
                onClick={() => {
                  setShowFavouritesOnly(!showFavouritesOnly);
                }}
              >
                Favoriye Göre
              </div>
            </Dropdown>
          </div>
        </div>
      </div>

      <div className="grid-container">
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
