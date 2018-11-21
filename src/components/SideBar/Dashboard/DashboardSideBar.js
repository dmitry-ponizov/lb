import React, { Component } from 'react'
import LeftPanel from './LeftPanel/LeftPanel'
import RightPanel from './RightPanel/RightPanel';
import styled from 'styled-components'

const DashBoardSideBarStyled = styled.div`
    border-bottom: 1px solid #eaeaea;
    padding-right: 0;
    display: flex;
    .row {
        margin: 0;
    }
`
class DashboardSideBar extends Component {
    state = {
        items: ['dashboard','domains', 'templates', 'websites'],
    }
  render() {
    return (
        <DashBoardSideBarStyled>
            <LeftPanel items={this.state.items} />
            <RightPanel items={this.state.items} active={this.props.active} /> 
        </DashBoardSideBarStyled>
    )
  }
}


export default DashboardSideBar;