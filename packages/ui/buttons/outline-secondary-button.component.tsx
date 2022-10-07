import * as React from "react";
import { Button } from "react-bootstrap";

interface Props {
  onClick: () => void;
  children?: JSX.Element;
}

export const OutlineSecondaryButton = ({ onClick, children }: Props) => {
  return (
    <Button variant="outline-secondary" onClick={() => onClick()}>
      {children}
    </Button>
  );
};
