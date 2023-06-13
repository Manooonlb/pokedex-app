function PokemonCard() {
    
    const pokemon = pokemonList[1];
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
const pokemonList = [
    {
        name : 'bulbasaur',
        imgsrc : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name : 'mew',
    },
];
export default PokemonCard;


