import { useState } from "react";
import type { JSX } from "react";
import { ListPokemons } from "./ListPokemons.tsx";
import type { Pokemon } from "./Pokemon.tsx";

export function AllPokemons(): JSX.Element {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]); // Empty array by default

  const callGetAllPokemons = async (setPokemons: (val: Pokemon[]) => void) => {
    const response = await fetch("http://localhost:1339/pokemons", {
      method: "GET",
    });
    const result = await response.json();
    setPokemons(result);
  };

  return (
    <>
      <button onClick={() => callGetAllPokemons(setPokemons)}>
        Get All Pokemons
      </button>
      <ListPokemons pokemons={pokemons} />
    </>
  );
}
