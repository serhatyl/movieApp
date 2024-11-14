import React from "react";
import { MovieModel } from "../../models";
import { useNavigate } from "react-router-dom";
import Badge from "../ui/Badge";
import MovieRating from "../MovieRating/MovieRating";
import { useMovies } from "../../hooks/useMovies";

interface Props extends MovieModel {
  imgUrl?: string;
}
const MovieItem = (props: Props) => {
  const { addFavourite, removeFavourite, favourites } = useMovies();

  const { imgUrl, id, name, year, imdb, category, isTvSeries } = props;
  const navigate = useNavigate();

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

  const handleClickMoviteItem = () => {
    navigate(`/movies/${id}`);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(props);
  };

  return (
    <div
      className="col-xs-12 col-sm-6 col-md-4 col-lg-3"
      onClick={handleClickMoviteItem}
      key={id}
    >
      <div className="movie-item">
        {isTvSeries && <Badge position="left">TV SERIES</Badge>}
        <Badge
          className={`badge--heart ${isFavourite() && `badge--liked`}`}
          onClick={(e: any) => handleFavoriteClick(e)}
          position="right"
          rounded
          clickable
        >
          <img src="./heart.svg" />
        </Badge>
        <img src={imgUrl ?? "https://placehold.co/250x370/jpg"} alt={name} />
        <div className="movie-date">{year}</div>
        <div className="name">{name}</div>
        <MovieRating imdbScore={imdb} />
        <div className="movie-category">{category}</div>
      </div>
    </div>
  );
};

export default MovieItem;
