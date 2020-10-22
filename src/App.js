import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListPokemon from './components/ListPokemon';
import SearchPokemon from './components/SearchPokemon';
import HeaderPokemon from './components/HeaderPokemon';

function App() {
  return (
    <div className="container">

      <HeaderPokemon/>
      
      <SearchPokemon/>
      
   
    </div>
  );
}

export default App;
