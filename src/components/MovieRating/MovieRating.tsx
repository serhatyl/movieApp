import React from "react";

interface MovieRatingProps {
  imdbScore: number | string;
}

const MovieRating = ({ imdbScore }: MovieRatingProps) => {
  return (
    <div className="movie-score">
      <img src="/imdb-icon.svg" alt="imdb-icon" />
      {imdbScore} / 100
    </div>
  );
};

export default MovieRating;
