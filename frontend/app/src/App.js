import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import MovieDetail from './MovieDetail';
import Collection from './Pages/Colletion';
import Wishlist from './Pages/Wishlist'; // Import Wishlist component
import './CSS/App.css';

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [collection, setCollection] = useState([]);
  const [wishlist, setWishlist] = useState([]); // State for wishlist
  const [activeTab, setActiveTab] = useState('search');

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTabChange = (tab) => {
    setSelectedMovie(null);
    setActiveTab(tab);
  };

  const handleAddToCollection = (movie) => {
    setCollection((prevCollection) => [...prevCollection, movie]);
  };

  const handleRemoveFromCollection = (movie) => {
    setCollection((prevCollection) =>
      prevCollection.filter((item) => item.imdbID !== movie.imdbID)
    );
  };

  const handleAddToWishlist = (movie) => { // Handler to add movie to wishlist
    setWishlist((prevWishlist) => [...prevWishlist, movie]);
  };

  const handleRemoveFromWishlist = (movie) => { // Handler to remove movie from wishlist
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.imdbID !== movie.imdbID)
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = process.env.REACT_APP_OMDB_API_KEY;
        const response = await fetch(
          `http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}&plot=full&type=movie`
        );
        const data = await response.json();

        if (data.Search) {
          const detailedResults = await Promise.all(
            data.Search.map(async (movie) => {
              const detailResponse = await fetch(
                `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=4d5f158f&plot=full`
              );
              const detailData = await detailResponse.json();
              return detailData;
            })
          );
          setSearchResults(detailedResults);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (searchTerm.trim() !== '') {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]); // Removed fetchData from the dependency array

  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">Movie App</div>
        <div className="nav-tabs">
          <div
            className={`nav-tab ${activeTab === 'search' ? 'active' : ''}`}
            onClick={() => handleTabChange('search')}
          >
            Search
          </div>
          <div
            className={`nav-tab ${activeTab === 'collection' ? 'active' : ''}`}
            onClick={() => handleTabChange('collection')}
          >
            My Collection
          </div>
          <div // Tab for Wishlist
            className={`nav-tab ${activeTab === 'wishlist' ? 'active' : ''}`}
            onClick={() => handleTabChange('wishlist')}
          >
            Wishlist
          </div>
        </div>
      </nav>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-box"
      />
      <div className="app-container">
        {selectedMovie && (
          <MovieDetail
            movie={selectedMovie}
            onAddToCollection={handleAddToCollection}
            onRemoveFromCollection={handleRemoveFromCollection}
            onAddToWishlist={handleAddToWishlist}
            onRemoveFromWishlist={handleRemoveFromWishlist}
          />
        )}
        {activeTab === 'search' && (
          <div>
            {searchResults.length > 0 ? (
              <div className="movie-list">
                {searchResults.map((movie, index) => (
                  <MovieCard key={index} movie={movie} onMovieClick={handleMovieClick} />
                ))}
              </div>
            ) : (
              <p>No results found</p>
            )}
          </div>
        )}
        {activeTab === 'collection' && (
          <Collection collection={collection} onMovieClick={handleMovieClick} />
        )}
        {activeTab === 'wishlist' && ( // Render Wishlist component
          <Wishlist wishlist={wishlist} onMovieClick={handleMovieClick} />
        )}
      </div>
    </div>
  );
};

export default App;
