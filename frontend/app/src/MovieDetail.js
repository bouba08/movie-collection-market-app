import React, { useState } from 'react';
import './CSS/App.css';

const MovieDetail = ({ movie, onAddToCollection, onRemoveFromCollection }) => {
  const [addToCollection, setAddToCollection] = useState(false);

  const handleCheckboxChange = () => {
    setAddToCollection(!addToCollection);

    // Call the appropriate function based on the checkbox state
    if (!addToCollection) {
      onAddToCollection(movie);
    } else {
      onRemoveFromCollection(movie);
    }
  };

  return (
    <div className="movie-detail-container">
      <div className="movie-detail">
        <h2>{movie.Title}</h2>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Box Office:</strong> {movie.BoxOffice}</p>
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
            checked={addToCollection}
            onChange={handleCheckboxChange}
          />
          Add to Collection
        </label>
      </div>
      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
    </div>
  );
};

export default MovieDetail;
