import React, {useEffect, useState, useCallback, useMemo} from 'react';
import {useParams} from 'react-router-dom';
import {MovieService} from '../../services';
import {MovieModel} from '../../models';
import MovieRating from '../../components/MovieRating/MovieRating';
import {useLayout} from '../../hooks/useLayout';
import Badge from '../../components/ui/Badge/Badge';
import {useMovies} from '../../hooks/useMovies';
import OctButton from '../../components/ui/Button/Button';
import {useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

const MovieDetailPage = () => {
  const {setShowFavourites, setShowSearch, setTitle, toggleLoader} = useLayout();
  const {addFavourite, removeFavourite, favourites} = useMovies();
  let navigate = useNavigate();
  const [movieDetail, setMovieDetail] = useState<MovieModel | null>(null);
  const params = useParams<{id: string}>();
  const {id} = params;

  const isFavourite = useMemo(() => {
    return favourites.some((movie) => movie.id === id);
  }, [favourites, id]);

  const toggleFavorite = (movie: MovieModel) => {
    isFavourite ? removeFavourite(movie.id) : addFavourite(movie);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (movieDetail) toggleFavorite(movieDetail);
  };

  const getMovieDetailById = useCallback(async () => {
    toggleLoader(true);
    if (!id) {
      console.error('Movie ID is missing.');
      return;
    }
    try {
      const movieResult = await MovieService.getMovieDetailById(id);
      toggleLoader(false);
      if (movieResult) {
        setMovieDetail(movieResult);
        setTitle(movieResult.name);
      } else {
        console.error('Movie not found.');
      }
    } catch (error) {
      console.error('Movie fetch failed. Please try again later.');
    }
  }, [id]);

  useEffect(() => {
    getMovieDetailById();
    setShowFavourites(true);
    setShowSearch(false);
  }, []);

  if (movieDetail) {
    return (
      <div className="movie-detail container">
        <div>
          <OctButton type={'button'} onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faChevronLeft} />
            <div>Geri Dön</div>
          </OctButton>
        </div>
        <div className="image-wrapper">
          <img
            src={movieDetail.imageUrl ?? 'https://placehold.co/1200x600/jpg'}
            alt={movieDetail.name}
          />
          {movieDetail.isTvSeries && <Badge position="left">TV SERIES</Badge>}
          <Badge
            className={`badge--heart ${isFavourite ? `badge--liked` : ``}`}
            onClick={handleFavoriteClick}
            position="right"
            rounded
            clickable
          >
            <img src="/heart.svg" />
          </Badge>
        </div>
        <article>
          <p>{movieDetail.summary}</p>
        </article>
        <hr />
        <MovieRating imdbScore={movieDetail.imdb} />
        <div className="movie-category">{movieDetail.category}</div>
        <div className="movie-date">{`${movieDetail.country}, ${movieDetail.year}`}</div>
      </div>
    );
  } else {
    return <div>Movie not found</div>;
  }
};

export default MovieDetailPage;
