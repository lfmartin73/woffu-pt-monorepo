import * as React from "react";
import { Button } from "react-bootstrap";

interface Props {
  className?: string;
  onClick: () => void;
  children?: JSX.Element;
}

export const PrimaryButton = ({ className, onClick, children }: Props) => {
  return (
    <Button variant="primary" onClick={() => onClick()}>
      {children}
    </Button>
  );
};
