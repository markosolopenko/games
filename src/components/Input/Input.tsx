import React, { ChangeEvent, InputHTMLAttributes } from "react";

type InputProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ onChange, ...rest }: InputProps): JSX.Element => (
  <input onChange={onChange} {...rest} />
);

export default Input;
