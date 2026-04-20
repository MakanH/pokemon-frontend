import type { JSX } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { UserError } from "./pages/UserError.tsx";
import { SystemError } from "./pages/SystemError.tsx";
import "./App.css";

/* Top-level component for our React app */
export default function App(): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usererror" element={<UserError />} />
        <Route path="/systemerror" element={<SystemError />} />
      </Routes>
    </div>
  );
}
