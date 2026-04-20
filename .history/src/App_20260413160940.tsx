import type { JSX } from "react";
import { Home } from "./pages/Home.tsx";
import "./App.css";

/* Top-level component for our React app */
export default function App(): JSX.Element {
  return (
    <div>
      <Home />
    </div>
  );
}
