import { Component } from "react";
import Pokemon from "./Pokemon";
import PropTypes from 'prop-types';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    return (
      pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)
    )
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.array.isRequired,
}

Pokedex.defaultProps = {pokemons: []}

export default Pokedex;
