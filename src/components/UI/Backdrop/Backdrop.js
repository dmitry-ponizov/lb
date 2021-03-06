import React from 'react';
import styled from 'styled-components'

const BackdropStyled = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    cursor: text;
    background: rgba(0,0,0,0.5);
`

const backdrop = (props) => (
    props.show ? <BackdropStyled onClick={props.clicked}></BackdropStyled> : null
)

export default backdrop;
