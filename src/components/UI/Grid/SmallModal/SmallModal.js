import React from 'react'
import styled from 'styled-components'
import ReactSVG from 'react-svg'
import trashImg from '../../../../../src/assets/images/trash.svg'

const ModalWrapper = styled.div`
    width: 68px;
    height: 25px;
    border-radius: 2px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    position: absolute;
    top:-26px;
    display: ${props => props.show ? 'flex': 'none'};
    right: 50%;
    align-items: center;
    justify-content: center;
    cursor: move;
    z-index: 102;
    
`

const ModalTitle = styled.div`
    width: 33px;
    height: 13px;
    font-family: Muli;
    font-size: 12px;
    letter-spacing: 0.1px;
    color: #000000;

`
const ModalIcon= styled.div`
    cursor:pointer;
    svg {
        width: 10px;
        height: 10px;
    }
`

const smallModal = (props) => {
    return (
            <ModalWrapper style={props.show ? {display:'flex'} : {display:'none'}}>
                <ModalTitle  >Text</ModalTitle>
                <ModalIcon onClick={ props.onClickHandler }><ReactSVG src={trashImg} /></ModalIcon>
            </ModalWrapper>
        )
  
}

export default smallModal;