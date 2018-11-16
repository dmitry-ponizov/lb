import React from 'react'
import LeftMenu from './LeftMenu/LeftMenu';
import RightMenu from './RightMenu/RightMenu'
import styled from 'styled-components'

const BuilderHeaderWrap = styled.div`
    border: solid 1px #eaeaea;
    min-height: 60px;
    display: flex;
    justify-content: space-between;
`
const BuilderHeader = (props) => (
    <BuilderHeaderWrap >
        <LeftMenu preview={props.preview} toggleHandler={(active) => props.toggleHandler(active) } />
        <RightMenu preview={props.preview}  onSaveHandler={props.onSaveHandler} previewHandler={props.previewHandler} />
    </BuilderHeaderWrap>
)

export default BuilderHeader;