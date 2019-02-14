import React from "react";
import './Button.css';

const Button = props => (
  <button
    onClick={()=> props.buttonType.clicked(props.item)}
    className={['Button', props.buttonType.type].join(' ')}
  >
    {props.children}
  </button>
);

export default Button;
