import React, { Component } from 'react'
import './DashboardSideBar.scss'
import LeftPanel from './LeftPanel/LeftPanel'
import RightPanel from './RightPanel/RightPanel';

 class DashboardSideBar extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}


const DashboardSideBar = (props) => (
    <div className="dashboard-side-bar">
        <LeftPanel />
        <RightPanel active={props.active} /> 
    </div>
)

export default DashboardSideBar;