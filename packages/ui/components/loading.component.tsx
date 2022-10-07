import * as React from "react";

interface Props {
  loading: boolean;
}

export const Loading = ({ loading }: Props) => {
  return (
    <>
      {loading && (
        <div className="spinner spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
};
