import React, { Fragment } from 'react'
import './Input.scss'

const input = (props) => {
    let inputClasses = "InputElement";

    let inputElement = null;
    let errorMsg = null;
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses +=' Invalid'
        errorMsg = props.errorMsg
    } else if(!props.invalid) {
        inputClasses +=' Valid'
    }
    switch (props.elementType) {
        case ('input'):
            inputElement = (
            <Fragment>
                <input
                    className={inputClasses}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
                <span className="InvalidMsg">{ errorMsg }</span>
            </Fragment>
            )
            break;
        case ('textarea'):
        
            inputElement = (
            <Fragment>
                <texarea
                    className="InputElement"
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                 />
                 <span className="InvalidMsg">{ errorMsg }</span>
            </Fragment>
            )
            break;
        case ('select'):
            inputElement = (
                <Fragment>
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
                <span className="InvalidMsg">{ errorMsg }</span>
                </Fragment>
            )
            break;
        default:
            inputElement = (
            <Fragment>
                <input
                    className={inputClasses}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
                <span className="InvalidMsg">{ errorMsg }</span>
            </Fragment>
            )
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