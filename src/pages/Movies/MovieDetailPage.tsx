import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { MovieService } from "../../services";
import { MovieModel } from "../../models";
import MovieRating from "../../components/MovieRating/MovieRating";
import { useLayout } from "../../hooks/useLayout";
import Badge from "../../components/ui/Badge";
import { useMovies } from "../../hooks/useMovies";

const MovieDetailPage = () => {
  const { setShowFavourites, setShowSearch, setTitle } = useLayout();
  const { addFavourite, removeFavourite, favourites } = useMovies();
  const [movieDetail, setMovieDetail] = useState<MovieModel | null>(null);
  const params = useParams<{ id: string }>();
  const { id } = params;

  const isFavourite = (): boolean => {
    return favourites.some((movie) => movie.id === id);
  };

  const toggleFavorite = (movie: MovieModel) => {
    if (isFavourite()) {
      removeFavourite(movie.id);
    } else {
      addFavourite(movie);
    }
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (movieDetail) toggleFavorite(movieDetail);
  };

  const getMovieDetailById = useCallback(async () => {
    if (!id) {
      console.error("Movie ID is missing.");
      return;
    }
    try {
      const movieResult = await MovieService.getMovieDetailById(id);
      if (movieResult) {
        setMovieDetail(movieResult);
        setTitle(movieResult.name);
      } else {
        console.error("Movie not found.");
      }
    } catch (error) {
      console.error("Movie fetch failed. Please try again later.");
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
        <div className="image-wrapper">
          <img
            src={movieDetail.imageUrl ?? "https://placehold.co/1200x600/jpg"}
            alt={movieDetail.name}
          />
          <Badge
            className={`badge--heart ${isFavourite() && `badge--liked`}`}
            onClick={(e: any) => handleFavoriteClick(e)}
            position="right"
            rounded
            clickable
          >
            <img src="/heart.svg" />
          </Badge>
        </div>
        <article>
          <p> {movieDetail.summary}</p>
        </article>
        <hr />
        <MovieRating imdbScore={movieDetail.imdb} />
        <div className="movie-category">{movieDetail.category}</div>
        <div className="movie-date">{`${movieDetail.country}, ${movieDetail.year}`}</div>
      </div>
    );
  } else {
    //TODO
    return null;
  }
};

export default MovieDetailPage;
