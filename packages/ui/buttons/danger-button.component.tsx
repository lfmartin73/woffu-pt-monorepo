import * as React from "react";
import { Button } from "react-bootstrap";

interface Props {
  className?: string;
  onClick: () => void;
  children?: JSX.Element;
}

export const DangerButton = ({ className, onClick, children }: Props) => {
  return (
    <Button variant="danger" onClick={() => onClick()}>
      {children}
    </Button>
  );
};
