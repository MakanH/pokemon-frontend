import type { JSX, ReactNode } from "react";
import "./Card.css";

/** Wrapper component used to format and style grouped content. */
export function Card({ children }: { children: ReactNode }): JSX.Element {
  return <div className="card">{children}</div>;
}
