import React from 'react';
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";

const Modal = props => (
    <div>
        <Backdrop
            show={props.show}
            clicked={props.closed}
        />
        <div
            className="Modal"
            style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
            }}
        >
            {props.children}
            <Button buttonType={props.buttons.Danger}>CANCEL</Button>
            <Button buttonType={props.buttons.Success}>CONTINUE</Button>
        </div>

    </div>
);

export default Modal;