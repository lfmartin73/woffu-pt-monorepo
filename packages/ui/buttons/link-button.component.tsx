import * as React from "react";
import { Button } from "react-bootstrap";

interface Props {
  className?: string;
  onClick: () => void;
  children?: JSX.Element;
}

export const LinkButton = ({ className, onClick, children }: Props) => {
  return (
    <Button variant="link" onClick={() => onClick()}>
        {children}
    </Button>
  );
};
