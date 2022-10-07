import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkButton } from "./link-button.component";

interface Props {
  onClick: () => void;
  children?: JSX.Element;
}

export const FilterButton = ({ onClick, children }: Props) => {
  return (
    <LinkButton onClick={() => onClick()}>
      <FontAwesomeIcon icon={["fas", "filter"]} />
    </LinkButton>
  );
};
