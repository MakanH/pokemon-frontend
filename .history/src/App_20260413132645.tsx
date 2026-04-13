import type { JSX } from "react";
import { Home } from "./components/Home.tsx";
import "./App.css";

/* Top-level component for our React app */
export function App(): JSX.Element {
  return (
    <div>
      <Home />
    </div>
  );
}
