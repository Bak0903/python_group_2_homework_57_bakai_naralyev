import React from 'react';
import './Alert.css';
// import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";

const Alert = props => (
    props.show ?
        <div
            className={['Alert', props.type].join(' ')}
        >
            {props.children}
            <Button buttonType={props.dismiss}>CANCEL</Button>
        </div>
    : null
);

export default Alert;