import type { JSX } from "react";
import { SinglePokemon } from "./SinglePokemon.tsx";
import { AllPokemons } from "./AllPokemons.tsx";
import { AddPokemon } from "./AddPokemon.tsx";
import { UpdatePokemon } from "./UpdatePokemon.tsx";

/** Main component for our home page */
export function Home(): JSX.Element {
  return (
    <>
      <h1>Welcome to our Pokemon App</h1>
      {/* Step 3.4a link test */}
      <a href="http://localhost:1339/pokemons=charizard">
        Find Eevee (Raw JSON)
      </a>
      <br />
      <br />

      <SinglePokemon />
      <br />
      <hr />
      <AllPokemons />
      <br />
      <hr />
      <AddPokemon />
      <br />
      <hr />
      <UpdatePokemon />
    </>
  );
}
