import React from 'react'
import styled from 'styled-components'

const ErrorMessageStyles = styled.div`
     height: 20px;
     color: #ff5757;
     font-size: 1.2rem;
     text-align: center;
     overflow: hidden;
     text-overflow: ellipsis;
`
const errorMessage = (props) => {

    let errors = null;
    if(props.errors) {
        errors = Object.values(props.errors).map((error,index) => (<ErrorMessageStyles key={index} className="error">{error}</ErrorMessageStyles>))
    }
    return errors;
}

export default errorMessage;