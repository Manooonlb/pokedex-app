import PropTypes from "prop-types";
function PokemonCard({ pokemonList }) {
  const pokemon = pokemonList[0];
  return (
    <figure>
      {pokemon.imgsrc ? (
        <img src={pokemon.imgsrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}
PokemonCard.propTypes = {
  pokemonList: PropTypes.shape({
    imgsrc: PropTypes.string,
    name: PropTypes.string.isRequired,
  }),
};

export default PokemonCard;
