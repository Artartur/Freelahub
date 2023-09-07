import React from "react";

import { constants } from "../utils/constants";
import { EventType } from "../utils";

import "../styles/Select.scss";

interface OptionsMappers {
  index: string;
  label: string;
}

interface SelectProps {
  label: string;
  name: string;
  options: Array<OptionsMappers>;
  onChange: (event: EventType) => void;
  value: string;
}

export default function Select({
  label,
  name,
  options,
  onChange,
  value,
  ...otherProps
}: SelectProps) {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        onChange={(e) => onChange(e)}
        value={value}
        {...otherProps}
      >
        <option value="" disabled hidden>
          {constants["choose-an-option"]}
        </option>
        {options.map((option) => (
          <option key={option.index} value={option.index}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
