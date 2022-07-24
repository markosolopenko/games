import React, { ChangeEvent } from "react";
import { Provider } from "../../types/types";

type SelectProps = {
  options: Provider[];
  defaultValue?: Provider;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({
  options,
  defaultValue,
  onChange,
}: SelectProps): JSX.Element => {
  return (
    <select onChange={onChange}>
      {defaultValue && (
        <option value={defaultValue.id}>{defaultValue.title}</option>
      )}
      {options.map((option) => (
        <option value={option.id} key={option.id}>
          {option.title}
        </option>
      ))}
    </select>
  );
};

export default Select;
