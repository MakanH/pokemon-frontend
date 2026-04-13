import { useState } from "react";
import type { JSX } from "react";
import { UpdatePokemonForm } from "./UpdatePokemonForm.tsx";
import { DisplayPokemon } from "./DisplayPokemon.tsx";
import type { Pokemon } from "./Pokemon.tsx";

export function UpdatePokemon(): JSX.Element {
  const [updated, setUpdated] = useState<Pokemon>();

  return (
    <>
      <UpdatePokemonForm setUpdated={setUpdated} />
      <DisplayPokemon pokemon={updated} heading="The changed pokemon is " />
    </>
  );
}
