import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

interface Props {
  onClick: () => void;
  children?: JSX.Element;
}

export const OkButton = ({ onClick, children }: Props) => {
  return (
    <Button variant="success" type="submit" onClick={() => onClick()}>
      <>
        <FontAwesomeIcon icon={["fas", "check"]} size={"lg"} className="me-2" />
        {children}
      </>
    </Button>
  );
};
