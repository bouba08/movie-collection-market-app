import React from 'react';

const Marketplace = ({ marketplaceListings }) => {
  return (
    <div>
      <h2>Marketplace</h2>
      <ul>
        {marketplaceListings.map((listing, index) => (
          <li key={index}>
            {listing.title} - ${listing.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Market;