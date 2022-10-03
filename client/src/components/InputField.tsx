import React, {ChangeEvent} from 'react';

type InputFieldProps = {
  label: string;
  name: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const InputField = ({label, ...input}: InputFieldProps) => (
  <>
    <label htmlFor={input.name}>{label}</label>
    <input id={input.name} {...input} />
  </>
);
