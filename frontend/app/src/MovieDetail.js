import React, { useState } from 'react';
import './CSS/App.css';
import Trailer from './Trailer';

const MovieDetail = ({ movie, onAddToCollection, onRemoveFromCollection, onAddToWishlist, onRemoveFromWishlist }) => {
  const [addToCollection, setAddToCollection] = useState(false);
  const [addToWishlist, setAddToWishlist] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === 'collection') {
      setAddToCollection(checked);
      if (checked) {
        onAddToCollection(movie);
      } else {
        onRemoveFromCollection(movie);
      }
    } else if (name === 'wishlist') {
      setAddToWishlist(checked);
      if (checked) {
        onAddToWishlist(movie);
      } else {
        onRemoveFromWishlist(movie);
      }
    }
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
        {movie.Ratings && movie.Ratings.map((rating, index) => (
          <p key={index}><strong>{rating.Source} Rating:</strong> {rating.Value}</p>
        ))}
        <p><strong>Cast:</strong> {movie.Actors}</p>
        
        <label>
          <input
            type="checkbox"
            name="collection"
            checked={addToCollection}
            onChange={handleCheckboxChange}
          />
          Add to Collection
        </label>

        <label>
          <input
            type="checkbox"
            name="wishlist"
            checked={addToWishlist}
            onChange={handleCheckboxChange}
          />
          Add to Wishlist
        </label>
      </div>
      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
    </div>
  );
};

export default MovieDetail;
