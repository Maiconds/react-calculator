import React from 'react';
import './clearbutton.css';

export const ClearButton = (props) => {
    return (
        <div className="clear-btn" onClick={props.handleClear}>
            {props.children}
        </div>
    );
}