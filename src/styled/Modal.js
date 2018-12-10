import styled from 'styled-components'

export const ModalStyled = styled.div`
    margin-top: 2px;
    left: 50%;
    position: absolute;
    width: 300px;
    border-radius: 6px;
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    z-index: 500;
    padding: 16px 0 0;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    cursor: default;

`

export const ModalButtons = styled.div`
    border-top:solid 1px #eaeaea;
    display: flex;
    margin-top: 10px;
`

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 13px 56px;
    cursor:pointer;
    &:first-child{
        border-right:solid 1px #eaeaea;
    }
    &:hover {
        span{
            color: #000000;
        }
    }
    span {
        font-family: Muli;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.3px;
        color: #969696;
    }
`