import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { MovieService } from "../../services";
import { MovieModel } from "../../models";
import MovieRating from "../../components/MovieRating/MovieRating";

const MovieDetailPage = () => {
  const [movieDetail, setMovieDetail] = useState<MovieModel | null>(null);

  const params = useParams<{ id: string }>();
  const { id } = params;

  const getMovieDetailById = useCallback(async () => {
    if (!id) {
      console.error("Movie ID is missing.");
      return;
    }
    try {
      const movieResult = await MovieService.getMovieDetailById(id);
      if (movieResult) {
        setMovieDetail(movieResult);
      } else {
        console.error("Movie not found.");
      }
    } catch (error) {
      console.error("Movie fetch failed. Please try again later.");
    }
  }, [id]);

  useEffect(() => {
    getMovieDetailById();
  }, []);

  if (movieDetail) {
    return (
      <div className="movie-detail container">
        <p> {movieDetail.summary}</p>
        <hr />
        <MovieRating imdbScore={movieDetail.imdb} />
        <div className="movie-category">{movieDetail.category}</div>
        <div className="movie-date">{`${movieDetail.country}, ${movieDetail.year}`}</div>
      </div>
    );
  } else {
    //TODO
    return (
      <>
        <h1>Aradığınız İçerik Bulunamadı</h1>
      </>
    );
  }
};

export default MovieDetailPage;
