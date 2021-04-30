import React from 'react';
import { Input as InputWilco } from '@inseefr/wilco';

const Input = ({ id, label, placeholder, value, onChange, col }) => (
  <InputWilco
    id={id}
    label={label}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    col={col}
  />
);

export default Input;
