import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  text?: string;
  children?: JSX.Element;
}

export const Error = ({ text, children }: Props) => {
  return (
    <>
      <div className="alert alert-danger text-center" role="alert">
        <FontAwesomeIcon
          icon={["fas", "circle-exclamation"]}
          color={"red"}
          size={"3x"}
        />
        <h5 className="mt-2">Something was wrong!</h5>
        {text && <span>{text}</span>}
        {children}
      </div>
    </>
  );
};
