import React from "react";

import "../styles/Fieldset.scss";

interface FieldsetProps {
  children: JSX.Element | JSX.Element[] | string;
  legend: string;
}

export default function Fieldset({ children, legend }: FieldsetProps) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
}
