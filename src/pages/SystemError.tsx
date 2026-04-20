import type { JSX } from "react";
import { Link, useLocation } from "react-router-dom";

export function SystemError(): JSX.Element {
  const { state } = useLocation();
  const errorMessage =
    (state as { errorMessage?: string } | null)?.errorMessage ||
    "A system error occurred. Please try again later.";

  return (
    <div>
      <h1>System Error</h1>
      <p>{errorMessage}</p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
      <p>
        <Link to="/">Try Again</Link>
      </p>
    </div>
  );
}
