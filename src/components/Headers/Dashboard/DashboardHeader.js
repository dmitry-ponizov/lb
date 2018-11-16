import React from 'react'
import LeftMenu from '../Builder/LeftMenu/LeftMenu';
import RightMenu from './RightMenu/RightMenu'
import styled from 'styled-components'

const DashBoardStyled = styled.div`
    border: solid 1px #eaeaea;
    min-height: 60px;
    display: flex;
    justify-content: space-between;

`
const DashboardHeader = (props) => (
    <DashBoardStyled >
        <LeftMenu preview={props.preview} toggleHandler={(active) => props.toggleHandler(active) } />
        <RightMenu  />
    </DashBoardStyled>
)

export default DashboardHeader;
