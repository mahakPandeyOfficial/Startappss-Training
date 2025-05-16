import React from 'react';
import MovieCard from './MovieCard';

//Conditional Rendering is used here to filter if not matched then show "No Movie Found"
const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return <p>No Movies Found</p>;
  }

  //Here the Movies Maping is done by using .map() function and feching it by id into card.
  return (
    <div className="movie-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
