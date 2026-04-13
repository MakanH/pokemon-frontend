import type { JSX, useState } from "react";
import { DisplayPokemon } from "./DisplayPokemon.tsx";
import type { Pokemon } from "./Pokemon.tsx";

/** Component that gets a pokemon from the back-end and then displays it. */
export function SinglePokemon(): JSX.Element {
  const [pokemon, setPokemon] = useState<Pokemon>();

  /* Handler function to fetch a pokemon and display the result. Result must be JSON format. */
  const callGetPokemon = async () => {
    const response = await fetch("http://localhost:1339/pokemons?name=eevee", {
      method: "GET",
    });
    const result = await response.json();
    setPokemon(result);
  };

  return (
    <>
      <button onClick={callGetPokemon}>Get Pokemon Eevee</button>
      <DisplayPokemon pokemon={pokemon} heading="The found pokemon is " />
    </>
  );
}
