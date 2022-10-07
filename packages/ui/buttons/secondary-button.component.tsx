import * as React from "react";
import { Button } from "react-bootstrap";

interface Props {
  className?: string;
  onClick: () => void;
  children?: JSX.Element;
}

export const SecondaryButton = ({ className, onClick, children }: Props) => {
  return (
    <Button variant="secondary" onClick={() => onClick()}>
      {children}
    </Button>
  );
};
