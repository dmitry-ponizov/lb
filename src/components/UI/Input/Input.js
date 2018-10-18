import React from 'react'
import './Input.scss'


const input = (props) => {
    let inputClasses = "InputElement";

    let inputElement = null;
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses +=' Invalid'
    } else if(!props.invalid) {
        inputClasses +=' Valid'
    }
    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />
            break;
        case ('textarea'):
            inputElement = <texarea
                className="InputElement"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />
            break;
        case ('select'):
            inputElement = (
                <select
                    className="InputElement"
                    value={props.value}
                    onChange={props.changed} >
                    {props.elementConfig.options.map((option, index) => (
                        <option value={option.value} key={index}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            )
            break;
        default:
            inputElement = <input
                className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />
            break;
    }
    return (
        <div className="Input">
            <label className="Label" >{props.label}</label>
            {inputElement}
        </div>
    )

}

export default input;