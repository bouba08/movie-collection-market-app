import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../MovieCard';
import Wishlist from './Wishlist';
import Sidebar from '../Sidebar'; // Corrected import path


const Collection = ({ user, onMovieClick }) => {
  const [collection, setCollection] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [activeTab, setActiveTab] = useState('collection');

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await axios.get(`/users/${user.id}/movies`);
        setCollection(response.data);
      } catch (error) {
        console.error('Error fetching collection:', error);
      }
    };

    fetchCollection();
  }, [user]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleAddToWishlist = async (movie) => {
    try {
      await axios.post(`/users/${user.id}/movies`, { movieId: movie.id });
      setWishlist([...wishlist, movie]);
    } catch (error) {
      console.error('Error adding movie to wishlist:', error);
    }
  };

  const handleRemoveFromWishlist = async (movie) => {
    try {
      await axios.delete(`/users/${user.id}/movies/${movie.id}`);
      setWishlist(wishlist.filter((item) => item.id !== movie.id));
    } catch (error) {
      console.error('Error removing movie from wishlist:', error);
    }
  };

  // Handler function for filtering movies by genre or actor/actress
  const handleFilterChange = (filterValue) => {
    // Implement filter logic based on the selected genre or search query
    // Update the collection accordingly
  };

  return (
    <div className="collection-page">
      <Sidebar onFilterChange={handleFilterChange} onSearch={handleFilterChange} />
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
