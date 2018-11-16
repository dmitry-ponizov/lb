import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import styled from 'styled-components'

const SideBarStyled = styled.div`
    padding: 20px;
    width: 61px;
    border-right:  solid 1px #eaeaea;
`
const LeftPanel = () => (
    <SideBarStyled className="builder-side-bar-left">
        <NavigationItem />
    </SideBarStyled>
)

export default LeftPanel;