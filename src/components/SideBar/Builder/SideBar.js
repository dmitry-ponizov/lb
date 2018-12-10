import React, { Component } from 'react'
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

class SideBar extends Component {
  state = {
    items: ['builder','page_manager'],
  }
  render() {
    return (
        <SideBarStyles>
            <LeftPanel items={this.state.items} />
            <RightPanel active={this.props.active} onSaveHandler = {this.props.onSaveHandler} component={this.props.component}/>
        </SideBarStyles>
    )
  }
}


export default SideBar;