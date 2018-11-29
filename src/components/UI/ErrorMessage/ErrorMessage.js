import React from 'react'
import styled from 'styled-components'

const ErrorMessageStyles = styled.div`
     height: 20px;
     color: #e36854;
     font-size: ${props => props.fontSize};
     font-weight:bold;
     text-align: ${props => props.position};
     overflow: hidden;
     text-overflow: ellipsis;
`
const errorMessage = (props) => {

    let errors = null;
    if(props.errors) {
        errors = Object.values(props.errors).map((error,index) => (<ErrorMessageStyles position={props.position} fontSize={props.fontSize} key={index} className="error">{error}</ErrorMessageStyles>))
    }
    return errors;
}

export default errorMessage;