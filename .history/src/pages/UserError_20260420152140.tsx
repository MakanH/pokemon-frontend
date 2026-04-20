import type { JSX } from "react";
import { Link, useLocation } from "react-router-dom";

export function UserError(): JSX.Element {
  const { state } = useLocation();
  const errorMessage =
    (state as { errorMessage?: string } | null)?.errorMessage ||
    "A request error occurred. Please check your input and try again.";

  return (
    <div>
      <h1>User Error</h1>
      <p>{errorMessage}</p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
      <p>
        <Link to="/">Try Adding Pokemon Again</Link>
      </p>
    </div>
  );
}
