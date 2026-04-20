import type { JSX } from "react";
import type { Pokemon } from "./Pokemon.tsx";
import { Card } from "./Card.tsx";

/** Component to display a given pokemon. */
export function DisplayPokemon(props: {
  pokemon: Pokemon | undefined;
  heading: string;
}): JSX.Element {
  const { pokemon, heading } = props;

  if (pokemon?.name === "Eevee") {
    throw new Error("Error displaying Eevee.");
  }

  return (
    <>
      {/* Display the pokemon, but only if defined */}
      {pokemon ? (
        <Card image={pokemon.image}>
          <h1>{heading}</h1>
          <h1>Name: {pokemon.name}</h1>
          <h1>Type: {pokemon.type}</h1>
        </Card>
      ) : (
        <h1>No pokemon</h1>
      )}
    </>
  );
}
