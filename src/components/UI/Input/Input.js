import React from 'react'
import './Input.scss'
import Aux from '../../../hoc/Aux/Aux'

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
            <Aux>
                <input
                    className={inputClasses}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
                <span className="InvalidMsg">{ errorMsg }</span>
            </Aux>
            )
            break;
        case ('textarea'):
        
            inputElement = (
            <Aux>
                <texarea
                    className="InputElement"
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                 />
                 <span className="InvalidMsg">{ errorMsg }</span>
            </Aux>
            )
            break;
        case ('select'):
            inputElement = (
                <Aux>
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
                </Aux>
            )
            break;
        default:
            inputElement = (
            <Aux>
                <input
                    className={inputClasses}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
                <span className="InvalidMsg">{ errorMsg }</span>
            </Aux>
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