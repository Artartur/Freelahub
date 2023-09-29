import React from "react";

import { constants } from "../utils/constants";
import { EventSelectType } from "../utils";

import "../styles/Select.scss";

interface OptionsMappers {
  index: string;
  label: string;
}

interface SelectProps {
  label: string;
  name: string;
  onChange: (event: EventSelectType) => void;
  options: Array<OptionsMappers>;
  value: string;
}

export default function Select({
  label,
  name,
  onChange,
  options,
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
