import React from 'react';
import './CSS/App.css';

const MovieCard = ({ movie, onMovieClick }) => {
  const handleClick = () => {
    onMovieClick(movie);
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Title}</p>
    </div>
  );
};

export default MovieCard;