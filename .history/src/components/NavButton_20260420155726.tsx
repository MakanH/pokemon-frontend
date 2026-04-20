import type { JSX } from "react";
import Button from "react-bootstrap/Button";

export function NavButton({
  label,
  variant,
}: {
  label: string;
  variant: string;
}): JSX.Element {
  return (
    <Button className="me-2 mb-2" variant={variant} type="button">
      {label}
    </Button>
  );
}
