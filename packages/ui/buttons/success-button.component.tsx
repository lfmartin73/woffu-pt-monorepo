import * as React from "react";
import { Button } from "react-bootstrap";

interface Props {
  className?: string;
  onClick: () => void;
  children?: JSX.Element;
}

export const SuccessButton = ({ className, onClick, children }: Props) => {
  return (
    <Button variant="success" onClick={() => onClick()}>
      {children}
    </Button>
  );
};
