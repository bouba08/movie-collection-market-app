import React, { useState } from 'react';
import './CSS/App.css';
import Trailer from './Trailer';

const MovieDetail = ({ movie, onAddToCollection, onRemoveFromCollection, onAddToWishlist, onRemoveFromWishlist }) => {
  const [isInCollection, setIsInCollection] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleAddToCollection = () => {
    setIsInCollection(true);
    onAddToCollection(movie);
  };

  const handleRemoveFromCollection = () => {
    setIsInCollection(false);
    onRemoveFromCollection(movie);
  };

  const handleAddToWishlist = () => {
    setIsInWishlist(true);
    onAddToWishlist(movie);
  };

  const handleRemoveFromWishlist = () => {
    setIsInWishlist(false);
    onRemoveFromWishlist(movie);
  };

  return (
    <div className="movie-detail-container">
      <div className="movie-detail">
        <h2>{movie.Title}</h2>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Box Office:</strong> {movie.BoxOffice}</p>
        <p><strong>Trailer:</strong> {<Trailer id={movie.imdbID} type={movie.Type}/>}</p>
        <p><strong>Awards:</strong> {movie.Awards}</p>
        <p><strong>Age Rating:</strong> {movie.Rated}</p>
        <p><strong>Director(s):</strong> {movie.Director}</p>
        <p><strong>Writer(s):</strong> {movie.Writer}</p>
        <p><strong>Language:</strong> {movie.Language}</p>
        <p><strong>Runtime:</strong> {movie.Runtime}</p>
        <p><strong>Country:</strong> {movie.Country}</p>
        <p><strong>Released Date:</strong> {movie.Released}</p>
        <p><strong>Cast:</strong> {movie.Actors}</p>
        {movie.Ratings && movie.Ratings.map((rating, index) => (
          <p key={index}><strong>{rating.Source} Rating:</strong> {rating.Value}</p>
        ))}
                
        {/* Button to add/remove from collection */}
        {isInCollection ? (
          <button onClick={handleRemoveFromCollection}>Remove from Collection</button>
        ) : (
          <button onClick={handleAddToCollection}>Add to Collection</button>
        )}

        {/* Button to add/remove from wishlist */}
        {isInWishlist ? (
          <button onClick={handleRemoveFromWishlist}>Remove from Wishlist</button>
        ) : (
          <button onClick={handleAddToWishlist}>Add to Wishlist</button>
        )}
      </div>
      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
    </div>
  );
};

export default MovieDetail;
