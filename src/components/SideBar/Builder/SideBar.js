import React from 'react'
import LeftPanel from './LeftPanel/LeftPanel'
import RightPanel from './RightPanel/RightPanel';
import styled from 'styled-components'

const SideBarStyles = styled.div`
    border-bottom: 1px solid #eaeaea;
    display: flex;
    .row {
        margin: 0;
    }
`


const SideBar = (props) => (
    <SideBarStyles>
        <LeftPanel />
        <RightPanel active={props.active}/>
    </SideBarStyles>
)

export default SideBar;