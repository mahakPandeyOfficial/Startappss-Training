import React from 'react';

const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      style={{
        display: 'flex',
        
        padding: '10px',
        fontSize: '16px',
        marginBottom: '20px',
        width: '100%',
        maxWidth: '400px',
        borderRadius: '8px',
        border: '1px solid #ccc'
      }}
    />
  );
};

export default SearchBar;
