import React from 'react';

const cardStyle = {
  border: '2px solid black',
  borderRadius: '8px',
  padding: '16px',
  width: '250px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor:'#FFC1DA',
};

//In movie card Title, Year, and Director is displaying
const MovieCard = ({ movie }) => {
  return (
    <div style={cardStyle}>
      <h2>{movie.title}</h2>
      <p><strong>Year:</strong> {movie.year}</p>
      <p><strong>Director:</strong> {movie.director}</p>
    </div>
  );
};

export default MovieCard;
