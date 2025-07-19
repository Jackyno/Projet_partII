import React from 'react';

const MovieList = ({ movies }) => (
  <div>
    <h2>Liste des films</h2>
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  </div>
);

export default MovieList;
