import type { JSX } from "react";
import { useLocation } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { SinglePokemon } from "../components/SinglePokemon.tsx";
import { AllPokemons } from "../components/AllPokemons.tsx";
import { AddPokemon } from "../components/AddPokemon.tsx";
import { UpdatePokemon } from "../components/UpdatePokemon.tsx";

/** Main component for our home page */
export function Home(): JSX.Element {
  const { state } = useLocation();
  const errorMessage = (state as { errorMessage?: string } | null)?.errorMessage;

  return (
    <>
      {errorMessage ? <Alert variant="danger">{errorMessage}</Alert> : null}
      <h1>Welcome to our Pokemon App</h1>
      {/* Step 3.4a link test */}
      <a href="http://localhost:5174/pokemons/charizard">
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
