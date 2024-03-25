import React from 'react';
import MovieCard from '../MovieCard';

const Wishlist = ({ wishlist, onMovieClick }) => {
  return (
    <div>
      <h2>Wishlist</h2>
      <div className="movie-list">
        {wishlist && wishlist.length > 0 ? (
          wishlist.map((movie, index) => (
            <MovieCard key={index} movie={movie} onMovieClick={onMovieClick} />
          ))
        ) : (
          <p>No movies in the wishlist</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
