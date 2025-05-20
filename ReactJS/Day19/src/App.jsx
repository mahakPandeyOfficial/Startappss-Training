import React, { useState, useMemo } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

const App = () => {
 

  ////////////////////////////////////React Memo and useMemo//////////////////////////////////////
  //React.memo is usefull when there is a functional component that renders the same output given the same input
  //useMemo is used to memoize the result of a function (which is a VALUE) so that it doesn't need to be recalculated on every render. it prevents from expensive calculation on every time in every render.

  const [query, setQuery] = useState('');

  // useMemo for filtering used to optimize performance
  // It will only recompute the filteredMovies when query changes
  // This is useful for performance optimization, especially when dealing with large datasets
  const filteredMovies = useMemo(() => {

    const allMovies = [
      { id: 1, title: 'Sholay', year: 1975, director: 'Ramesh Sippy' },
      { id: 2, title: 'Dilwale Dulhania Le Jayenge', year: 1995, director: 'Aditya Chopra' },
      { id: 3, title: 'Lagaan', year: 2001, director: 'Ashutosh Gowariker' },
      { id: 4, title: '3 Idiots', year: 2009, director: 'Rajkumar Hirani' },
      { id: 5, title: 'Dangal', year: 2016, director: 'Nitesh Tiwari' },
      { id: 6, title: 'Gully Boy', year: 2019, director: 'Zoya Akhtar' },
      { id: 7, title: 'Kabir Singh', year: 2019, director: 'Sandeep Reddy Vanga' },
      { id: 8, title: 'Baahubali: The Beginning', year: 2015, director: 'S. S. Rajamouli' },
      { id: 9, title: 'Baahubali 2: The Conclusion', year: 2017, director: 'S. S. Rajamouli' },
      { id: 10, title: 'Swades', year: 2004, director: 'Ashutosh Gowariker' },
      { id: 11, title: 'Barfi!', year: 2012, director: 'Anurag Basu' },
      { id: 12, title: 'Taare Zameen Par', year: 2007, director: 'Aamir Khan' },
      { id: 13, title: 'PK', year: 2014, director: 'Rajkumar Hirani' },
      { id: 14, title: 'Rang De Basanti', year: 2006, director: 'Rakeysh Omprakash Mehra' },
      { id: 15, title: 'Chak De! India', year: 2007, director: 'Shimit Amin' },
      { id: 16, title: 'Andhadhun', year: 2018, director: 'Sriram Raghavan' },
      { id: 17, title: 'Queen', year: 2014, director: 'Vikas Bahl' },
      { id: 18, title: 'Piku', year: 2015, director: 'Shoojit Sircar' },
      { id: 19, title: 'Zindagi Na Milegi Dobara', year: 2011, director: 'Zoya Akhtar' },
      { id: 20, title: 'Tumbbad', year: 2018, director: 'Rahi Anil Barve' },
      { id: 21, title: 'Drishyam', year: 2015, director: 'Nishikant Kamat' },
      { id: 22, title: 'Kahaani', year: 2012, director: 'Sujoy Ghosh' },
      { id: 23, title: 'Bajrangi Bhaijaan', year: 2015, director: 'Kabir Khan' },
      { id: 24, title: 'Rockstar', year: 2011, director: 'Imtiaz Ali' },
      { id: 25, title: 'Black', year: 2005, director: 'Sanjay Leela Bhansali' },
    ];

    return allMovies.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="app" style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>🎬 Movie Mania</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
