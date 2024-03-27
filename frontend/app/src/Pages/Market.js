import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Market = () => {
  const [marketplaceListings, setMarketplaceListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get('/marketplace');
        setMarketplaceListings(response.data);
      } catch (error) {
        console.error('Error fetching marketplace listings:', error);
      }
    };

    fetchListings();
  }, []);

  return (
    <div>
      <h2>Marketplace</h2>
      <ul>
        {marketplaceListings.map((listing) => (
          <li key={listing.id}>
            {listing.title} - ${listing.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Market;
