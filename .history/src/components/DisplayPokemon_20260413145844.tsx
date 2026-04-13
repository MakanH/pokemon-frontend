import type { JSX } from "react";
import type { Pokemon } from "./Pokemon.tsx";

/** Component to display a given pokemon. */
export function DisplayPokemon(props: {
  pokemon: Pokemon | undefined;
  heading: string;
}): JSX.Element {
  return (
    <>
      {/* Display the pokemon, but only if defined */}
      {props.pokemon ? (
        <>
          <h1>{props.heading}</h1>
          <h1>Name: {props.pokemon.name}</h1>
          <h1>Type: {props.pokemon.type}</h1>
        </>
      ) : (
        <h1>No pokemon</h1>
      )}
    </>
  );
}
