import React, { Component } from 'react'
import DashboardHedader from '../../../components/Headers/Dashboard/DashboardHeader'
import DashboardSideBar from '../../../components/SideBar/Dashboard/DashboardSideBar';

class DashboardLayout extends Component {
    state = {
        active: true
    }
    toggleHandler = (active) => {
        this.setState({active})
    }


  render() {
    return (
        <div className="dashboard">
            <DashboardHedader  toggleHandler={(active) => this.toggleHandler(active) }  />
            <div className="dashboard-wrapper">
            <DashboardSideBar active={ this.state.active } />
            { this.props.children }
            </div>
        </div>
    )
  }
}

export default DashboardLayout;