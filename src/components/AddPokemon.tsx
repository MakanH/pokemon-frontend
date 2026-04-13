import { useState } from "react";
import type { JSX } from "react";
import { AddPokemonForm } from "./AddPokemonForm.tsx";
import { DisplayPokemon } from "./DisplayPokemon.tsx";
import type { Pokemon } from "./Pokemon.tsx";

export function AddPokemon(): JSX.Element {
  const [added, setAdded] = useState<Pokemon>(); // Empty object by default

  return (
    <>
      <AddPokemonForm setAdded={setAdded} />
      <DisplayPokemon pokemon={added} heading="The added pokemon is " />
    </>
  );
}
