import type { JSX, ReactNode } from "react";
import "./Card.css";

/** Wrapper component used to format and style grouped content. */
export function Card({
  children,
  image,
}: {
  children: ReactNode;
  image?: string;
}): JSX.Element {
  return (
    <div className="card">
      {image ? <img className="card-img" src={image} alt="" /> : null}
      {children}
    </div>
  );
}
