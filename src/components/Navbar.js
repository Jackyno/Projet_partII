import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Accueil</Link> | 
    <Link to="/movies">Films</Link> | 
    <Link to="/add">Ajouter</Link>     
  </nav>
);

export default Navbar;