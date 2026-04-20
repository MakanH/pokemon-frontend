import type { JSX } from "react";

export function ErrorPage(): JSX.Element {
  return (
    <div>
      <h1>Something went wrong.</h1>
      <p>The ErrorBoundary caught a rendering error.</p>
    </div>
  );
}
