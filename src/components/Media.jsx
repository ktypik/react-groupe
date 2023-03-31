const pokemonList = [
  {
    name: "Gt 500 Eleanor",
    imgSrc:
      "https://res.cloudinary.com/dsxfn6o4q/image/upload/c_fill,g_center,h_467,w_624/v1639247420/h8gxiczv6yldoucd1azj.jpg",
  },
  {
    name: "mew",
  },
];

function PokemonCard() {
  const pokemon = pokemonList[0];
  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt="pokemon vert" />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
