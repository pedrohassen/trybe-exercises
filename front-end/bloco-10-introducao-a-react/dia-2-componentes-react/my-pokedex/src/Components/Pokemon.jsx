import { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {

  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image } = pokemon;
    const { value, measurementUnit } = averageWeight;
    return (
      <div className ="poke" key={pokemon.id}>
        <div>
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>Average Weight: {value}{measurementUnit}</p>
        </div>
        <div className="image">
        <img src={image} alt="Sprite do Pokémon"/>
        </div>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
}

Pokemon.defaultProps = {pokemon: {}}

export default Pokemon;
