import { Component } from 'react';
import pokemons from './data';
import Pokedex from './Components/Pokedex';
import './Styles/App.css';
import './Styles/Pokedex.css';


class App extends Component {
  render() {
    return (
      <div className='title-container'>
        <h1 className='title'>Pokédex</h1>
        <Pokedex pokemons={pokemons}/>
      </div>
    )
  }
}

export default App;
