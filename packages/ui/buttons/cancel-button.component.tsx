import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OutlineDangerButton } from "./outline-danger-button.component";

interface Props {
  onClick: () => void;
  children?: JSX.Element;
}

export const CancelButton = ({ onClick, children }: Props) => {
  return (
    <OutlineDangerButton onClick={() => onClick()}>
      <>
        <FontAwesomeIcon icon={["fas", "xmark"]} size={"lg"} color="red" className="me-2" />
        {children}
      </>
    </OutlineDangerButton>
  );
};
