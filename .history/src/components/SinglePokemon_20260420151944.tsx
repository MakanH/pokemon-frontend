import { useState } from "react";
import type { JSX } from "react";
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

    let image = result.image as string | undefined;

    if (!image && result.name) {
      image = `/images/${String(result.name).toLowerCase()}.png`;
    }

    if (!result.image && result.name) {
      try {
        const pokeapi = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${String(result.name).toLowerCase()}`,
          { method: "GET" },
        );

        if (pokeapi.ok) {
          const pokemonData = await pokeapi.json();
          image =
            pokemonData?.sprites?.other?.["official-artwork"]?.front_default ||
            image;
        }
      } catch {
        // Keep local/public image path fallback if PokeAPI is unavailable.
      }
    }

    setPokemon({ ...result, image });
  };

  return (
    <>
      <button onClick={callGetPokemon}>Get Pokemon Eevee</button>
      <DisplayPokemon pokemon={pokemon} heading="The found pokemon is " />
    </>
  );
}
