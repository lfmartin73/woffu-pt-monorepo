import * as React from "react";
import { Button } from "react-bootstrap";

interface Props {
  onClick: () => void;
  children?: JSX.Element;
}

export const OutlineDangerButton = ({ onClick, children }: Props) => {
  return (
    <Button variant="outline-danger" onClick={() => onClick()}>
      {children}
    </Button>
  );
};
