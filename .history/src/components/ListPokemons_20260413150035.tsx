import type { JSX } from "react";
import type { Pokemon } from "./Pokemon.tsx";

/** Component that accepts a prop containing an array of pokemon and outputs that array as a list. */
export function ListPokemons({
  pokemons,
}: {
  pokemons: Pokemon[];
}): JSX.Element {
  return (
    <div>
      <h1>All Pokemon</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon._id}>
            {pokemon.name} with type {pokemon.type}.
          </li>
        ))}
      </ul>
    </div>
  );
}
