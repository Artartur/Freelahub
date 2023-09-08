import React from "react";
import { EventInputType } from "../utils";

import "../styles/Input.scss";

interface InputProps {
  label: string;
  name: string;
  onChange: (event: EventInputType) => void;
  type: string;
  value: string;
}

export default function Input({
  label,
  name,
  onChange,
  type,
  value,
  ...otherProps
}: InputProps) {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input
        {...otherProps}
        id={name}
        name={name}
        onChange={(e) => onChange(e)}
        type={type}
        value={value}
      />
    </div>
  );
}
