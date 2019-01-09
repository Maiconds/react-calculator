import React from 'react';
import './Button.css';

// val is operator if is different from a number or
const isOperator = val => {
    return isNaN(val);
}

const Button = (props) => {
    return (
        <div className={`button-wrapper ${
            isOperator(props.children)? 'operator' : null }`}>
            {props.children}
        </div>
    )
}

export default Button;
