import React from 'react'
import './ErrorMessage.scss'

const errorMessage = (props) => {

    let errors = null;
    if(props.errors) {
        errors = Object.values(props.errors).map(error => (<p className="error">{error}</p>))
    }
    return errors;
}

export default errorMessage;