import { useRef } from "react";
import type { SubmitEvent, JSX } from "react";
import type { Pokemon } from "./Pokemon.tsx";

export function AddPokemonForm({
  setAdded,
}: {
  setAdded: (val: Pokemon) => void;
}): JSX.Element {
  const nameRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault(); // prevent page reload

    const requestOptions = {
      method: "POST",
      body: JSON.stringify({
        name: nameRef.current?.value || "",
        type: typeRef.current?.value || "",
        image: imageRef.current?.value || "",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const response = await fetch(
      "http://localhost:1339/pokemons",
      requestOptions,
    );
    const result = await response.json();
    setAdded(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" placeholder="Name..." ref={nameRef} required />

      <label htmlFor="type">Type</label>
      <input type="text" placeholder="Type..." ref={typeRef} required />

      <label htmlFor="image">Image URL (optional)</label>
      <input
        type="text"
        placeholder="Image URL..."
        ref={imageRef}
      />

      <button type="submit">Add Pokemon</button>
    </form>
  );
}
