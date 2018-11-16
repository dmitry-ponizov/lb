import React from 'react'
import logotype from '../../../../../assets/images/logotype.png'
import styled from 'styled-components'


const Logo = styled.div`
    overflow: hidden;
    /* border-right:  solid 1px #eaeaea; */
    max-width: ${props => props.show ? '260px': 0};
    transition: max-width 1s ease;
    background: #fff;
    height: 100%;
`

const ImageWrap = styled.div`
    text-align: left;
    padding: 20px;
    min-width: 260px;
`

const logo = (props) => (
    <Logo  show={props.active ? " show" : ""}>
        <ImageWrap>
             <img src={logotype} alt="logotype" />
        </ImageWrap>
    </Logo>
)

export default logo;