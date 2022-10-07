import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkButton } from "./link-button.component";

interface Props {
  onClick: () => void;
  children?: JSX.Element;
}

export const ViewButton = ({ onClick, children }: Props) => {
  return (
    <LinkButton onClick={() => onClick()}>
      <>
        <FontAwesomeIcon icon={["fas", "eye"]} />
        {children}
      </>
    </LinkButton>
  );
};
