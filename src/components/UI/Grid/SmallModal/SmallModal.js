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
    right: 40%;
    align-items: center;
    justify-content: center;
    cursor: auto;
    z-index: 102;
`

const ModalTitle = styled.div`
    width: 33px;
    height: 13px;
    font-family: Muli;
    font-size: 10px;
    letter-spacing: 0.1px;
    color: #000000;
    font-weight: 600;
`
const ModalIcon= styled.div`
    margin-bottom: 3px;
    cursor:pointer;
`

const smallModal = (props) => {
    return (
        <ModalWrapper style={{ display: props.show ? 'flex' : 'none' }}>
            <ModalTitle>
                 Text
            </ModalTitle>
            <ModalIcon onClick={ props.onClickHandler }>
                <ReactSVG src={trashImg}  />
            </ModalIcon>
        </ModalWrapper>
    )
  
}

export default smallModal;