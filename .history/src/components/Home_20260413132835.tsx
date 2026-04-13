import type { JSX } from "react";

export function Home(): JSX.Element {
  return (
    <>
      <h1>Welcome to our Pokemon App</h1>
      <a href="http://localhost:1339/pokemons?name=eevee">Find Eevee</a>
    </>
  );
}
