import React from 'react';
import { Button as ButtonWilco } from '@inseefr/wilco';

const Button = ({ onClick, text, disabled, col, offset }) => (
  <ButtonWilco
    label={text}
    action={onClick}
    disabled={disabled}
    col={col}
    offset={offset}
  />
);

export default Button;
