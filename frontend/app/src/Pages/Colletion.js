import React, { useState } from 'react';
import MovieCard from '../MovieCard';
import Sidebar from '../Sidebar';
import Wishlist from './Wishlist'; // Import the Wishlist component
import '../CSS/App.css';

const Collection = ({ collection, wishlist, onMovieClick, onAddToWishlist, onRemoveFromWishlist }) => {
  const [activeTab, setActiveTab] = useState('collection');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="collection-page">
      <div className="tabs">
        <button className={activeTab === 'collection' ? 'active' : ''} onClick={() => handleTabChange('collection')}>
          Collection
        </button>
        <button className={activeTab === 'wishlist' ? 'active' : ''} onClick={() => handleTabChange('wishlist')}>
          Wishlist
        </button>
      </div>
      <div className="movie-list">
        {activeTab === 'collection' ? (
          <>
            <Sidebar collection={collection} />
            {collection.map((movie, index) => (
              <MovieCard key={index} movie={movie} onMovieClick={onMovieClick} />
            ))}
          </>
        ) : (
          <Wishlist wishlist={wishlist} onMovieClick={onMovieClick} />
        )}
      </div>
    </div>
  );
};

export default Collection;
