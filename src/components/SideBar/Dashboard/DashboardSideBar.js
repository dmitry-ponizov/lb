import React, { Component } from 'react'
import './DashboardSideBar.scss'
import LeftPanel from './LeftPanel/LeftPanel'
import RightPanel from './RightPanel/RightPanel';

class DashboardSideBar extends Component {
    state = {
        items: ['dashboard', 'templates', 'websites'],
    }
  render() {
    return (
        <div className="dashboard-side-bar">
            <LeftPanel items={this.state.items} />
            <RightPanel items={this.state.items} active={this.props.active} /> 
        </div>
    )
  }
}


export default DashboardSideBar;