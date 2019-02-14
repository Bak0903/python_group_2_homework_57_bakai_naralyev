import React from "react";
import './Button.css';

const Button = props => (
  <button
    onClick={props.buttonType.clicked}
    className={['Button', props.buttonType.type].join(' ')}
  >
    {props.children}
  </button>
);

export default Button;
