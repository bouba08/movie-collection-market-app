import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../MovieCard';
import Wishlist from './Wishlist';

const Collection = ({ user, onMovieClick }) => { // Accept user prop
  const [collection, setCollection] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [activeTab, setActiveTab] = useState('collection');

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await axios.get(`/users/${user.id}/movies`); // Use user.id to fetch user's movies
        setCollection(response.data);
      } catch (error) {
        console.error('Error fetching collection:', error);
      }
    };

    fetchCollection();
  }, [user]); // Include user in dependency array to fetch collection when user changes

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleAddToWishlist = async (movie) => {
    try {
      await axios.post(`/users/${user.id}/movies`, { movieId: movie.id }); // Use user.id to add movie to user's wishlist
      setWishlist([...wishlist, movie]);
    } catch (error) {
      console.error('Error adding movie to wishlist:', error);
    }
  };

  const handleRemoveFromWishlist = async (movie) => {
    try {
      await axios.delete(`/users/${user.id}/movies/${movie.id}`); // Use user.id to remove movie from user's wishlist
      setWishlist(wishlist.filter((item) => item.id !== movie.id));
    } catch (error) {
      console.error('Error removing movie from wishlist:', error);
    }
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
            {collection.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onMovieClick={onMovieClick} />
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
