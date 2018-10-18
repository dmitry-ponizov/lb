import React from 'react';
import './Button.scss'

const button = (props) => {
    let btnClasses = 'Button ' + props.btnType;
    return (
        <button
            disabled={props.disabled}
            onClick={props.clicked}
            className={btnClasses}>
            {props.children}
        </button>
    )

};

export default button
