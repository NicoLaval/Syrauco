import React from 'react';
import { Button as ButtonWilco } from '@inseefr/wilco';

const Button = ({ onClick, text }) => (
  <ButtonWilco label={text} action={onClick} />
);

export default Button;
