import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DangerButton } from "./danger-button.component";

interface Props {
  onClick: () => void;
  children: JSX.Element;
}

export const DangerOkButton = ({ onClick, children }: Props) => {
  return (
    <DangerButton onClick={() => onClick()}>
      <>
        <FontAwesomeIcon icon={["fas", "check"]} size={"lg"} color="red" className="me-2" />
        {children}
      </>
    </DangerButton>
  );
};
