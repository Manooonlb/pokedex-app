function PokemonCard({pokemonList}) {
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
    
};

export default PokemonCard;


