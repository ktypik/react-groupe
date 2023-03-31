import "./App.css";
import Avatar from "./components/Avatar.jsx";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import pokemonList from "./components/pokemonList";
import Mario from "./components/Mario";

/* Create two new const avatar for bart simpson and homer simpson */
const bart = {
  image:
    "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  firstName: "Bart",
  lastName: "Simpson",
};
const homer = {
  image:
    "https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
  firstName: "Homer",
  lastName: "Simpson",
};
const mario = {
  image:
    "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0/c_scale,w_400/ncom/en_CA/games/switch/n/new-super-mario-bros-u-deluxe-switch/description-image",
  name: "Mario",
};

/* function avatar pour retourner les images, les noms ,les prenoms et le compteur des personnages*/

function App() {
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);
  const pokemonListLength = pokemonList.length;
  const handleClickPrev = () => {
    if (currentPokemonIndex > 0) {
      setCurrentPokemonIndex(currentPokemonIndex - 1);
    }
  };
  const handleClickNext = () => {
    if (currentPokemonIndex < pokemonListLength - 1) {
      setCurrentPokemonIndex(currentPokemonIndex + 1);
    }
  };
  const currentPokemon = pokemonList[currentPokemonIndex];
  return (
    <div className="App">
      <PokemonCard pokemon={currentPokemon} />
      <button onClick={handleClickPrev} disabled={currentPokemonIndex === 0}>
        Précédent
      </button>
      <button
        onClick={handleClickNext}
        disabled={currentPokemonIndex === pokemonListLength - 1}
      >
        Suivant
      </button>
      <div className="Avatar">
        <Avatar avatar={bart} />
        <Avatar avatar={homer} />
        <Mario mario={mario} />
      </div>
    </div>
  );
}

export default App;
