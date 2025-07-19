import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MovieList from './components/MovieList';
import AddMovieForm from './components/AddMovieForm';
import About from './components/About';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/movies')
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList movies={movies} />} />
        <Route path="/add" element={<AddMovieForm addMovie={addMovie} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
