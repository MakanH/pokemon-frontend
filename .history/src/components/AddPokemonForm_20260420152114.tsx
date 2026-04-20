import { useRef } from "react";
import type { SubmitEvent, JSX } from "react";
import { useNavigate } from "react-router-dom";
import type { Pokemon } from "./Pokemon.tsx";

export function AddPokemonForm({
  setAdded,
}: {
  setAdded: (val: Pokemon) => void;
}): JSX.Element {
  const navigate = useNavigate();
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
    try {
      const response = await fetch(
        "http://localhost:1339/pokemons",
        requestOptions,
      );
      const result = await response.json();

      if (!response.ok) {
        if (response.status >= 400 && response.status < 500) {
          navigate("/usererror", {
            state: {
              errorMessage:
                result.errorMessage || "Validation error trying to add pokemon.",
            },
          });
        } else {
          navigate("/systemerror", {
            state: {
              errorMessage:
                result.errorMessage || "System error trying to add pokemon.",
            },
          });
        }
        return;
      }

      setAdded(result);
    } catch {
      navigate("/systemerror", {
        state: {
          errorMessage:
            "Could not reach the back-end server while adding pokemon.",
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" placeholder="Name..." ref={nameRef} required />

      <label htmlFor="type">Type</label>
      <input type="text" placeholder="Type..." ref={typeRef} required />

      <label htmlFor="image">Image URL (optional)</label>
      <input type="text" placeholder="Image URL..." ref={imageRef} />

      <button type="submit">Add Pokemon</button>
    </form>
  );
}
